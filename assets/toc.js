/* =============================================================
   SITE TABLE OF CONTENTS — single source of truth
   -------------------------------------------------------------
   The "Bring a Barrier, Leave With a Build" workshop site (HKIS Teachers
   Teach Teachers, 2 October 2026). Built on the HKIS Biology reader
   template: course.js reads everything it generates from this file.

   chapter fields (see the Biology template's toc.js for the full list)
     id        unique slug, also used as body[data-chapter]
     file      path relative to the site root
     unit      id of an entry in COURSE.units
     title     page title ("1 Flint K12": the number goes in the sidebar gutter)
     summary   one line for search
     keywords  extra search terms not in the visible text
     time      working time, shown as a pill
     sections  number of [data-track] sections in the file, so progress can
               be counted without opening the page. Keep it in step.
     question  the one question the page answers (the progression strip)
   ============================================================= */
window.COURSE = {
    title: 'Bring a Barrier, Leave With a Build',
    subtitle: 'Build the classroom tool nobody else will build for you',

    // The A3 handout: the Handout button in the toolbar and the foot of the sidebar.
    handout: 'handout/Bring-a-Barrier-handout-A3.pdf',

    // Listen's natural voices (121 MB) are borrowed from the Biology reader, which is
    // served from the same host. Anywhere else, Listen uses the device's voices.
    voiceRoot: 'https://dbbudd.github.io/biology/',

    units: [
        { id: 'session', label: 'The session', short: 'Session', hue: 210, needs: [] },
        { id: 'tools', label: 'Getting started with the tools', short: 'Tools', hue: 355, needs: ['session'] }
    ],

    chapters: [
        {
            id: 'session', file: 'index.html', unit: 'session',
            title: 'The session',
            summary: 'The whole session: the idea, why now, the question, the loop, then nine steps from the warm-up to Build 02, and where it goes next.',
            keywords: 'recursion iteration fern lungs MIT watershed thinking routines creativity algorithmic heuristic question loop warm-up creative hustle barrier deficit sketch prompt spine build test SCAMPER corners margins biology third rung',
            sims: [], time: '50 min', sections: 9, standards: [], kind: 'Overview',
            question: 'What problems do you want to solve?', status: 'ready'
        },
        {
            id: 'flint', file: 'flint.html', unit: 'tools',
            title: '1 Flint K12',
            summary: 'Round 1. Log in to Flint, make an interactive or an explainer from your own materials, and push it further.',
            keywords: 'flint flintk12 sparky live simulation video explainer interactive activity microsoft sign in',
            sims: [], time: '15 min', sections: 5, standards: [], kind: 'Lesson',
            question: 'What can you build when your materials are the boundary?', status: 'ready'
        },
        {
            id: 'gemini', file: 'gemini.html', unit: 'tools',
            title: '2 Gemini',
            summary: 'Round 2. Build a single-screen tool in Gemini Canvas from your prompt spine, test it, share it, and push it further.',
            keywords: 'gemini canvas google vibe coding app html javascript share classroom drive prompt spine',
            sims: [], time: '20 min', sections: 5, standards: [], kind: 'Lesson',
            question: 'What can you build when the behaviour is yours to design?', status: 'ready'
        }
    ],

    standards: {},

    // Words with a dotted underline on the pages (<span class="term">). Hover or tap shows these.
    glossary: {
        'Recursion': 'Applying a rule to its own output, again and again, so each round starts from what the last one made. It builds a fern and the branches of your lungs. When each round also responds to what is around it, things adapt: plants and animals to where they live, an AI model to what it is scored on, your tool to your students.',
        'Algorithmic problem': 'A problem with a known procedure: follow the steps and you get the answer. AI is now very good at these.',
        'Heuristic problem': 'A problem with no reliable procedure. You work on it with rules of thumb, judgment and trial, and you know you have arrived when you look at the result.',
        'Deficit': 'A description that puts the problem in the student: "They can’t organise their writing." It names what the student lacks.',
        'Barrier': 'A description that puts the problem in the task or the design: "The organising has to happen in their head at the same time as the writing." A barrier is something a teacher can change.',
        'Prompt': 'The instructions you type for an AI tool. A good prompt says who the tool is for, what they see first, what they can do, the language level and what to leave out.',
        'Prompt spine': 'The fill-in-the-blanks prompt from the session: Build a single-screen tool for a Grade ___ student who ___. Show ___ first, then let them ___. Keep the language at ___. No sign-in.',
        'Vibe coding': 'Making software by describing what you want in plain language, letting an AI write the code, then testing it and asking for changes. You judge the result by using it, not by reading the code.',
        'App': 'Anything you open and use. It doesn’t need to be in an App Store.',
        'HTML': 'The structure. Boxes, text, where things sit.',
        'JavaScript': 'The behaviour. What happens when you press the thing.',
        'Live simulation': 'A Flint option that builds an interactive with controls students can use. Flint marks it Experimental.',
        'Canvas': 'A Gemini workspace that writes a document or a small web app beside the chat. You try the app in Preview and ask for changes in plain language.',
        'Sparky': 'Flint’s AI tutor, which talks with students inside a Flint activity.',
        'SCAMPER': 'A creative-thinking routine for improving an idea: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse. Each word is one way to change one thing.',
        'Thinking routine': 'A short set of steps, used again and again, that shapes how students think, such as See, Think, Wonder.'
    }
};
