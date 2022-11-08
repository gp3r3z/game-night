import { appState } from "../AppState.js"
import { playersService } from '../Services/PlayersService.js'



export class PlayersController {
    // NOTE controllers constructor runs on page load

    constructor() {
        console.log("Loading players controller")
        this.drawPlayers()
    }
    drawPlayers() {
        console.log("Drawing Players")
        let template = ''
        appState.players.forEach(p => template += p.PlayerTemplateCard)
        document.getElementById('app').innerHTML = template
    }


    test() {
        console.log("The test button was successful ")
    }
    addPlayer() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            // ...
            // extract form data
            console.log("Creating Player ", form.name.value)
            let playerData = {
                name: form.name.value
            }

            console.log("Player data mapped", playerData)
            playersService.addPlayer(playerData)

            // ...
            form.reset()
            this.drawPlayers()
        } catch (e) {
            console.error('[addPlayer]', error)
        }
    }
    increasePoint(name) {
        console.log('Increasing ', name)

        playersService.increasingPoints(name)
        this.drawPlayers()



    }
    decreasePoint(name) {
        console.log('Decreasing ', name)
        playersService.decreasingPoints(name)
        this.drawPlayers()
    }

}