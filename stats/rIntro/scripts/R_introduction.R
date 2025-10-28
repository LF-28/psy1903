#### (1) Setup initial directory structure -------------------------------------

## Start by setting your working directory to your psy1903 folder. Replace "~/Desktop/" with the correct path to your psy1903 directory:
setwd("~/Desktop/psy1903/")

## Create a new parent directory called "stats" where we will be doing all of our R work:
dir.create("stats/")

## Create a new directory called "rIntro" for today's exercises:
dir.create("stats/rIntro")
## Create new subdirectories "data", "scripts", & "output" for today's exercises:
dir.create("stats/rIntro/data")
dir.create("stats/rIntro/scripts")
dir.create("stats/rIntro/output")

## Set working directory to the rIntro/scripts parent directory, which will be our home base for today:
setwd("~/Desktop/psy1903/stats/rIntro/scripts")

## Save this script as R_introduction.R within your scripts directory (you can just use command+S or File → Save As)

#### (2) Installation of packages ----------------------------------------------

## Packages are essential toolboxes that you load into R and allow you to do cool things with your data
## One package called "pacman" makes installing packages very easy...

if (!require("pacman")) {install.packages("pacman"); require("pacman")}  # First install and load in pacman to R

## Then use p_load and a list of all of the packages that you need for the project (with each one being in "quotes")

p_load("tidyverse","rstudioapi","lme4","emmeans","psych","corrplot")  # tidyverse contains many packages like dplyr, tidyr, stringr, and ggplot2, among others, and the additional packages should cover our data manipulations, plotting, and analyses

mydata <- read.csv("../data/data.csv")

head(mydata)      # View the first few rows
str(mydata)       # See the structure of the data frame
summary(mydata)   # Get a summary of each column

mydata$moodGroup <- as.factor(mydata$moodGroup)
str(mydata)
# Create sample data
subject_id <- 1:20
rt <- c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445, 275, NA, 600, 290, 560, 375, 450, 480, 325, 430)
congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE)
color <- c("red", "blue", "blue", "green", "red", "red", "blue", "green", "blue", "green", "red", "blue", "green", "blue", "green", "red", "blue", "blue", "green", "red")

# Combine into data frame
data <- data.frame(subject_id, rt, congruent, color)

# Inspect
head(data)    # Displays the top 6 observations — great for checking that your data imported or assigned correctly.
tail(data)    # Displays the bottom 6 observations — useful for confirming structure and missing values at the end.
mean(data$rt) # Without na.rm = TRUE, mean() returns NA because R doesn’t ignore missing values by default.
mean(data$rt, na.rm=TRUE) # This tells R to remove any missing values before calculating the mean. Calculates mean of all RT's = 434.47ms
summary(data) # Displays descriptive statistics for each variable (column) in the dataframe.
str(data)     # Displays the structure of the dataframe — its dimensions, variable types, and a sample of values.

nums <- c(5, 10, 15, 20)
nums[c(TRUE, FALSE, TRUE, FALSE)]  # selects 5 and 15
nums[nums > 10]                    # selects elements greater than 10


df <- data.frame(
  id = 1:4,
  name = c("Alice", "Bob", "Carmen", "Diego"),
  score = c(88, 92, 95, 90)
)

df[1, ]       # selects the first row (all columns)
df[, 2]       # selects the second column (all rows)
df[1:2, c(1, 3)]  # selects rows 1–2 and columns 1 and 3
df[-1, ]   # all rows except the first
df[, -2]   # all columns except the second

df$name       # returns the 'name' column as a vector
df$score      # returns the 'score' column as a vector
df[, "score"] # identical result

df[, "score", drop = FALSE]

col_to_access <- "score"
df[[col_to_access]]   # same as df$score

df[df$score > 90, ]      # rows where score is greater than 90
df[df$name == "Alice", ] # rows where name is Alice

df[df$score > 90 & df$id < 4, ]

df$passed <- df$score >= 90
df

new_row <- data.frame(id = 5, name = "Eva", score = 93, passed = TRUE)
df <- rbind(df, new_row)


columns_to_keep <- c("id", "score")
df[, columns_to_keep]


congruent_trials <- data[data$congruent == TRUE, ]
fast_trials <- data[data$rt < 500, ]
fast_congruent <- data[data$congruent == TRUE & data$rt < 500, ]

mean(data[data$congruent == TRUE, "rt"], na.rm = TRUE)
mean(data[data$congruent == FALSE, "rt"], na.rm = TRUE)
sum(!is.na(data$rt))
mean(data[data$color == "blue", "rt"], na.rm = TRUE)
mean(data[data$color == "red", "rt"], na.rm = TRUE)

subset_cols <- data[, c("subject_id", "rt", "congruent")]

