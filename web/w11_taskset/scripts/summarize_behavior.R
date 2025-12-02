summarize_behavior <- function(data, rt_min = 300, rt_max = 900) {
  # Ensure all expected column names are there
  if (!all(c("block", "condition", "color", "word", "rt", "response", "correct", "stim_onset_ms", "resp_time_ms" ) %in% names(data)) ||
      !any(c("trial_type", "trialType") %in% names(data))) {
    stop("Input data frame is missing required columns.")
  }
  if ("trial_type" %in% names(data)) {
    names(data)[names(data) == "trial_type"] <- "trialType"
  }
  
  ## Change correct correct to logical
  data$correct <- as.logical(data$correct)
  ## Check if rt column is numeric 
  if (!is.numeric(data$rt)) {
    data$rt <- as.numeric(data$rt)
    warning("'rt' column was not numeric. Coerced with as.numeric().")
  }
  mean_accuracy <- mean(data$correct, na.rm = TRUE)
  data_filtered  <- data[data$correct == TRUE & data$rt  >= rt_min & data$rt  <= rt_max, ]
  mean_rt_correct <- mean(data_filtered$rt, na.rm = TRUE)
  result <- data.frame(mean_accuracy = mean_accuracy, mean_rt_correct = mean_rt_correct)
  return(result)
}
# summarize_behavior(participant_data)
