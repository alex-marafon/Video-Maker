const readline = require('readline-sync')

function start (){
    const content ={}
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()


    function askAndReturnSearchTerm(){
        return readline.question( 'Qual tema vc quer hj: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectPrefixText = prefixes[selectPrefixIndex]
        
        console.log(selectPrefixText)
        return selectPrefixText
    }

    console.log(content)
}
start()