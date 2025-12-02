compute_rt_if_missing_loop <- function(data) {
  # If is.na(rt) and stim_onset_ms and resp_time_ms are present, sets rt <- resp_time_ms - stim_onset_ms.  
  
  # Leaves true-missing trials (where response is also NA) unchanged.  
  # Provide both implementations: (a) a for-loop with if/else, and (b) a vectorized ifelse() approach.
  #a) 
  for (i in 1:nrow(data)) {
    if (is.na(data[i, "rt"]) && 
      !is.na(data[i, "response"]) &&
      !is.na(data[i, "resp_time_ms"]) &&
      !is.na(data[i, "stim_onset_ms"])) { 
      data[i, "rt"] <- data[i, "resp_time_ms"] - data[i, "stim_onset_ms"] 
      }
  }
  return(data)
}

  #b)
compute_rt_if_missing_vector <- function(data) {
   data$rt <- ifelse(
    is.na(data$rt) &
    !is.na(data$response) &
    !is.na(data$resp_time_ms) &
    !is.na(data$stim_onset_ms), 
    data$resp_time_ms - data$stim_onset_ms, 
    data$rt
    )# Otherwise, keep rt the same
  return(data)
}
