var canBeTypedWords = (text, brokenLetters) => {
    let word = text.split(" ")
    let count = 0

    for (let i = 0; i < word.length; i++) {
        let isBroken = false;
        for (let j = 0; j < word[i].length; j++) {
            for (let k = 0; k < brokenLetters.length; k++) {
                if (word[i].charAt(j) === brokenLetters.charAt(k)) {
                    isBroken = true;
                    break;
                }
            }
            if (isBroken) break;
        }
        if (!isBroken) count++;
    }

    return console.log(count);
};

canBeTypedWords("hello world", "ad")
canBeTypedWords("leet code", "lt")