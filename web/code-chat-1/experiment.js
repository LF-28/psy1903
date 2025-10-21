let jsPsych = initJsPsych();
let timeline = [];



// Welcome trial will go here
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1 class='welcomeHeader'>Welcome!</h1> 
    <p>In this experiment, you will be shown a series of words.</p>
    <p>Press the letter <span class='key'>F</span> if the word is positive.</p>
    <p>Press the letter <span class='key'>J</span> if the word is negative.</p>
    <p>Press <span class='key'>SPACE</span> to begin.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);


// Main trials will go here
let randomWords = jsPsych.randomization.repeat(conditions, 1);
for (let item of randomWords) {
    let valenceTask = {
        type: jsPsychHtmlKeyboardResponse,
        choices: ['f', 'j'],
        stimulus: `
        '<p>${item.word}</p>`
        ,
        data: {
            collect: true,
            valence: item.valence,
            word: item.word,
        },
        on_finish: function (data) {
            if (data.valence == 'positve' && data.response == 'f') {
                data.correct = true;
            } else if (data.valence == 'negative' && data.response == 'j') {
                data.correct = true;
            } else {
                data.correct = false;
            };

        }
    };
    timeline.push(valenceTask)

};




// Debrief trial
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: 'NO KEYS',
    on_start: function () {
        // Filter and retrieve results as CSV data
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();
        console.log(results);
    }
}
timeline.push(debriefTrial);


jsPsych.run(timeline);