class Task {
    constructor(){
        this.title;
    }

    get getTitle(){
        return this._title;
    }

    set setTitle(value){
        this._title = value;
    }

}

let task = new Task();
task.setTitle = "asd"//set value
task.getTitle;// get value
console.log(task.getTitle);