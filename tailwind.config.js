module.exports = {
  // purge: ["index.html"],
  darkMode: "class", // it should be either media or class
  content: ["./index.html"],
  theme: {
    // jodi nijer custom plugin gula extend er vitor na likhi, taile seta tailwind er default config ke reset korbe. jemon ami jodi color plugin nei ar tar moddhe dei blue:'blue', tkhn ami puro project oi color chara ar color pabo na, karon tailwind er gulake reset kore felechi. ar oi color plugin tai jodi ami extend er vitor ditam, taile seta to thaktoi abar tailwind er default gulao thakto, orthat extend hoto. mot kotha, pura desig system ta ekhanei define kora thakbe. nicher variant section o same
    extend: {
      screens: {
        //we can reset tailwinds default breakpoints and set our own here
      },
      colors: {
        
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
};
