let jsPsych = initJsPsych(); //how all jsPsych code starts
let timeline = [];

//Welcome
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin the first part.</p>
    `,

    choices: [' '],

};
timeline.push(welcomeTrial);


// Randomize the conditions in this block

for (let condition of conditions) {
    let mathTrial = {
        type: jsPsychSurveyHtmlForm,
        preamble: `<p>what is ${condition.num1} + ${condition.num2} </p>`,
        html: `<p><input type='text' name='answer' id='answer'></p>`, //gave it an id becuase saw autofocus in documentation
        autofocus: 'answer', // id of the field we want to auto-focus on when the trial starts so mouse is there
        button_label: 'Submit Answer',
        data: {
            collect: true,
        },
        on_finish: function (data) {
            data.num1 = condition.num1;
            data.num2 = condition.num2;
            data.correctAnswer = condition.correctAnswer;
            data.answer = data.response.answer;
            if (data.answer == condition.correctAnswer) {
                data.correct = true;
            } else {
                data.correct = false;
            }



        }//letting us filter out response data 
    };

    timeline.push(mathTrial);
};

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        console.log(data);
    }
};
timeline.push(debriefTrial);


jsPsych.run(timeline); 