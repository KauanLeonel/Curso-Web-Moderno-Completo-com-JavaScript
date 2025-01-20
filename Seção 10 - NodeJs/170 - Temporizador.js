// Foi baixado o schedule

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){//Significa que ele vai fazer a tarefa de 5 em 5 segundos  
    console.log("Tarefa sendo realizada", new Date().getSeconds())
}) //Significa que ele vai fazer a tarefa de 5 em 5 segundos

setTimeout(function(){ //O próprio modo de fazer temporizador do JavaScript
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1')
}, 2000)

//Também dá para fazer com setImmediate e setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,6)]
regra.hour =19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a tarefa 2', new Date().getSeconds() )
})