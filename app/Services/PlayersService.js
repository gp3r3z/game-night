import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


class PlayersService {
    addPlayer(playerData) {
        const newPlayer = new Player(playerData.name)
        // handle additional data concerns
        console.log('New player created', newPlayer)
        appState.players.push(newPlayer
        )
    }
    increasingPoints(name) {
        let player = appState.players.find(p => p.name == name)
        player.score++
        console.log(player.score)
    }
    decreasingPoints(name) {
        let player = appState.players.find(p => p.name == name)
        player.score--
        console.log(player.score)
    }
}

export const playersService = new PlayersService()