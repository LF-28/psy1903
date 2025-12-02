##Get files 
process_participant <- function(file_name) {
  ## Derive a subject id from the filename (no extension)
  subject_id <- sub("\\.csv$", "", basename(file_name))
  
  print(paste("Processing file:", file_name))
  
  ## Read the raw CSV
  # participant_data <- read.csv(file_path, stringsAsFactors = FALSE)
  participant_data <- read.csv(
    here::here("data", "raw", file_name),
    stringsAsFactors = FALSE
  )
  
  if ("trial_type" %in% names(participant_data)) {
    names(participant_data)[names(participant_data) == "trial_type"] <- "trialType"
  }
  ##Compute missing RTs
  participant_data <- compute_rt_if_missing_vector(participant_data)
  
  ##summary
  behavior <- summarize_behavior(participant_data, rt_min=300, rt_max=900)
  
  ##Questionnaire
  esq_sum <- score_questionnaire(
            json_string = participant_data[participant_data$trialType == "es_questionnaire", "response"], 
            reverse = c(2, 5, 9), 
            scale_min = 0L, 
            scale_max = 4)
  ## Combine into a single-row participant summary
  print(subject_id)
  print(behavior)
  print(esq_sum)
  mean_accuracy <- unname(behavior$mean_accuracy[1])
  mean_rt_correct <- unname(behavior$mean_rt_correct[1])
  
  participant_summary <- data.frame(
    subject_id = subject_id, 
    mean_accuracy = mean_accuracy,
    mean_rt_correct = mean_rt_correct,
    esq_sum = esq_sum
  )
  ## Example inside process_participant()
  write.csv(
    data,
    here::here("data", "cleaned", paste0(subject_id, "_processed.csv")),
    row.names = FALSE
  )
  
 

  #### Return output ------------------------------------------------------
  stopifnot(nrow(participant_summary) == 1)  # one row per participant
  return(participant_summary)

}
# test_data <- process_participant("est-experiment-2025-11-05-09-04-45.csv")
# str(test_data)
# head(test_data)
# names(test_data)
##Q4.4 Explain
  # Briefly describe two things you notice about the structure or data types. 
      ##almost everything except for rt, stim_onset and resp_tm (which are integers) are characters. There are 10 columns, and one row at the end is a questionnaire JSON file.

