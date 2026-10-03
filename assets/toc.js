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
     status    'ready', or 'planned' for a page that is not open yet: the sidebar
               shows it as Soon, links to it on other pages switch off (workshop.js),
               and its sections don't count toward progress
   ============================================================= */
window.COURSE = {
    title: 'Bring a Barrier, Leave With a Build',
    subtitle: 'Build the classroom tool nobody else will build for you',

    // The A3 handout: the Handout button in the toolbar and the foot of the sidebar.
    // (Used only when there is no COURSE.tools below.)
    handout: 'handout/Bring-a-Barrier-handout-A3.pdf',

    // The session runs with one of two pairs of tools. The session page shows the
    // reader's pair: ?tools=shortcuts-claude in the address picks it, the cover has a
    // switch, and the choice is remembered. Each pair has its own A3 handout; null
    // means still to come (it shows as Soon). If you change the default, change the
    // data-tools attribute on index.html's <html> tag to match.
    tools: {
        default: 'flint-gemini',
        pairs: {
            'flint-gemini': { label: 'Flint + Gemini', handout: 'handout/Bring-a-Barrier-handout-A3.pdf' },
            'shortcuts-claude': { label: 'Shortcuts + Claude', handout: null }
        }
    },

    // Listen's natural voices (121 MB) are borrowed from the Biology reader, which is
    // served from the same host. Anywhere else, Listen uses the device's voices.
    voiceRoot: 'https://dbbudd.github.io/biology/',

    units: [
        { id: 'session', label: 'The session', short: 'Session', hue: 210, needs: [] },
        { id: 'tools', label: 'Getting started with the tools', short: 'Tools', hue: 355, needs: ['session'] },
        { id: 'publishing', label: 'App publishing', short: 'Publishing', hue: 40, needs: ['tools'] }
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
        },
        {
            id: 'shortcuts', file: 'shortcuts.html', unit: 'tools',
            title: '3 Apple Shortcuts',
            summary: 'Round 1 of the Shortcuts and Claude session. Describe a shortcut in plain words and let Apple Intelligence build it, then check it, tweak it, run it and share it. The worked example, Summarise, turns a meeting transcript into notes. A draft.',
            keywords: 'apple shortcuts apple intelligence describe a shortcut describe a change tweak use model on-device summarise transcript meeting notes automation ipad iphone mac icloud link ai',
            sims: [], time: '', sections: 6, standards: [], kind: 'Lesson',
            question: 'What could run itself, every lesson?', status: 'planned'
        },
        {
            id: 'claude', file: 'claude.html', unit: 'tools',
            title: '4 Claude',
            summary: 'Round 2 of the Shortcuts and Claude session. In the Claude desktop app, build a tool from your prompt spine as an artifact beside the chat, test it, publish it and share the link. A draft.',
            keywords: 'claude anthropic desktop app mac artifact prompt spine publish copy link unpublish share round 2 shortcuts session',
            sims: [], time: '', sections: 4, standards: [], kind: 'Lesson',
            question: 'What does your barrier look like as a screen students use?', status: 'planned'
        },
        {
            id: 'chatgpt', file: 'chatgpt.html', unit: 'tools',
            title: '5 ChatGPT',
            summary: 'The third rung. In the ChatGPT app for Mac, build the same barrier from your prompt spine as a code block you can preview, then publish it for students with GitHub Pages. A draft.',
            keywords: 'chatgpt openai desktop app mac chat code block preview download code edit with ai github pages data controls temporary chat hong kong third rung prompt spine',
            sims: [], time: '', sections: 4, standards: [], kind: 'Lesson',
            question: 'What changes when a different builder reads the same prompt spine?', status: 'planned'
        },
        {
            id: 'claude-code', file: 'claude-code.html', unit: 'tools',
            title: '6 Claude Code',
            summary: 'The third rung. Build a tool bigger than one screen with Claude Code, Anthropic’s coding agent, then publish it. A first draft.',
            keywords: 'claude code anthropic agent coding folder website index.html third rung publish',
            sims: [], time: '', sections: 5, standards: [], kind: 'Lesson',
            question: 'What can you build when the tool stops being the limit?', status: 'planned'
        },
        {
            id: 'xcode', file: 'xcode.html', unit: 'tools',
            title: '7 Xcode',
            summary: 'Build a classroom tool as a real iPad app with the AI agents in Xcode 27, run it in a simulator or on your own iPad, and get it to students. A draft.',
            keywords: 'xcode 27 swift swiftui ipad app agents claude agent codex chatgpt intelligence coding assistant device hub simulator developer mode apple school manager',
            sims: [], time: '', sections: 5, standards: [], kind: 'Lesson',
            question: 'What should be a real app on a student’s iPad?', status: 'planned'
        },
        {
            id: 'github-pages', file: 'github-pages.html', unit: 'publishing',
            title: '1 GitHub Pages',
            summary: 'Publish a classroom tool as a free website from a GitHub repository, and keep it up to date with GitHub Desktop. A first draft.',
            keywords: 'github pages publish website repository index.html free link deploy github desktop commit push clone',
            sims: [], time: '', sections: 6, standards: [], kind: 'Lesson',
            question: 'How do students open what you built?', status: 'planned'
        },
        {
            id: 'vercel', file: 'vercel.html', unit: 'publishing',
            title: '2 Vercel',
            summary: 'Publish a web app with Vercel from a GitHub repository, with a preview link for every change. A first draft.',
            keywords: 'vercel deploy web app github preview link hosting',
            sims: [], time: '', sections: 5, standards: [], kind: 'Lesson',
            question: 'How does a growing tool stay live while you change it?', status: 'planned'
        },
        {
            id: 'app-store', file: 'app-store.html', unit: 'publishing',
            title: '3 App Store',
            summary: 'Publish an app made in Xcode: the Apple Developer Program, App Store Connect, TestFlight and App Review. A first draft.',
            keywords: 'app store apple developer program app store connect testflight app review publish ipad',
            sims: [], time: '', sections: 5, standards: [], kind: 'Lesson',
            question: 'What does it take to put an app in students’ hands?', status: 'planned'
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
        'Thinking routine': 'A short set of steps, used again and again, that shapes how students think, such as See, Think, Wonder.',
        'Coding agent': 'An AI that works on a project’s files by itself, step by step: it writes code, runs it and fixes what breaks, checking with you as it goes.',
        'Swift': 'Apple’s programming language for apps on iPhone, iPad and Mac.',
        'Repository': 'A project’s folder on GitHub: its files, and the history of every change made to them.',
        'App Store Connect': 'Apple’s website for an app on the App Store: its store page, its builds, testing and review.',
        'TestFlight': 'Apple’s way to try an app before it is on the App Store. Testers install it from an invitation.',
        'Commit': 'A saved set of changes to the files in a repository, with a short note saying what changed.',
        'Push': 'To send your commits from your computer to GitHub, so the repository, and any site published from it, has your changes.',
        'Artifact': 'Something Claude makes beside the chat, such as a document or a small working app, that you can use straight away, change by asking, and share.',
        'Apple Intelligence': 'Apple’s AI, built into recent iPhones, iPads and Macs. A smaller model runs on the device itself; larger ones run on Apple’s servers, called Private Cloud Compute.'
    }
};
