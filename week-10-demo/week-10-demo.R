## R version of function
getRandomNumber <- function(min = 1, max= 10, number = 1) {
  sample(min:max, number)
}

getRandomNumber(18, 65, 3)

#Conditionals 
#if (condition) {
# Code if condition is TRUE
#3} else {
  # Code if condition is FALSE
#}
if (age >= 18) { 
  print("You are an adult.") #if condition 1 is true
} else { 
    print("You are not an adult.") #if condition 1 is false
}

##if (condition1) {
# Code if condition1 is TRUE
#} else if (condition2) {
  # Code if condition2 is TRUE
#} else {
  # Code if neither condition1 nor condition2 is TRUE
#}
if (age >= 65) {
  print("You are a senior.")
} else if (age >= 18) {
  print("You are an adult.")
} else if (age >= 13) {
  print("You are a teen.")
} else {
  print("You are a child.")
}

#Loops 
##for (variable in sequence) {
# Code to execute for each iteration
#}
for (i in 1:5) {
  print(paste("Iteration:", i))
}

experiment_data <- data.frame(
  subject_id = c(1:20),
  rt = c(480, 530, 495, 610, 455, 390, 510, 565, 430, NA, 380, 230, 395, 710, 755, 590, 810, 365, 630, 200),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE),
  condition = c("control", "control", "incongruent", "control",
                "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent", "control", "control", "incongruent",
                "control", "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent")
)
## Create a new (empty) column
experiment_data$rt_category <- NA

## Use a for loop to classify each subject
for (i in 1:nrow(experiment_data)) {
  if (is.na(experiment_data[i, "rt"])) {
    experiment_data[i, "rt_category"] <- "Unknown"
  } else if (experiment_data[i, "rt"] < 500) {
    experiment_data[i, "rt_category"] <- "Fast"
  } else {
    experiment_data[i, "rt_category"] <- "Slow"
  }
}

experiment_data$rt_category_vector <- NA

## Using a vectorized function
experiment_data$rt_category_vector <- ifelse(rt < 500, "Fast", "Slow")
##if missing
experiment_data$rt_category_vector <- ifelse(
  is.na(experiment_data$rt), "Unknown",              # If RT is missing
  ifelse(experiment_data$rt < 500, "Fast", "Slow")   # Otherwise, check Fast vs Slow
)

## Example matrix of reaction times from 3 blocks per subject
rt_data <- data.frame(
  block1 = c(520, 480, 610, 390, 450),
  block2 = c(530, 470, 600, 420, 500),
  block3 = c(540, 490, 590, 410, 480)
)
rt_data

## Mean reaction time across blocks for each subject across blocks (row-wise)
rowMeans(rt_data)
# [1] 530.0 480.0 600.0 406.7 476.7

## Mean reaction time for each block across subjects (column-wise)
colMeans(rt_data)
# block1 block2 block3 
# 490 504 504 

## Apply the mean function across columns (2 = columns)
apply(rt_data, 2, mean)
# Same as colMeans()

## Apply the standard deviation across rows (1 = rows)
apply(rt_data, 1, sd)

##tapply
experiment_data$rt[is.na(experiment_data$rt)] <- 500 # To start, replace the NA with 500 so tapply will work
## Mean RT by experimental condition
tapply(experiment_data$rt, experiment_data$condition, mean)
#   control incongruent 
#   498     505

## Mean RT by congruency (TRUE/FALSE)
tapply(experiment_data$rt, experiment_data$congruent, mean)
#   FALSE  TRUE 
#   447    556 ##why is this different than by experimental condition

