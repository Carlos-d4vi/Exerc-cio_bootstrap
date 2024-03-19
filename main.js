$(document).ready(()=>{
    $('form').submit((e)=>{
        e.preventDefault()
        
        const nome = $('#Nome').val()
        const email = $('#Email').val()
        const Telefone = $('#Telefone').val()

        const txt = `${nome} ${email} ${Telefone}`

        var blob = new Blob([txt],
        {type: 'text/plain: charset=utf-8'}
        )

        saveAs(blob, 'teste' + '.txt')
    })
})