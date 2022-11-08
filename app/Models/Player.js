

export class Player {
    constructor(name) {
        this.name = name
        // Score is at default value of 0 
        this.score = 0
        console.log('New player Initializing')
    }

    get PlayerTemplateCard() {
        return /*html*/`
    <div class="card col-3 mt-2">
        <div class="card-body">
            ${this.name} - ${this.score}
        </div>
          <div class="card-body">
          <button onclick="app.playersController.increasePoint('${this.name}')" class="btn btn-primary">+</button>
             <button onclick="app.playersController.decreasePoint('${this.name}')" class="btn btn-primary">-</button>
        </div>
    </div>`
    }

}


