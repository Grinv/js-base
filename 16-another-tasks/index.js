const toDoListOld = {
    list: [],
    getTaskIndexById: function(id) {
        const taskIndex = this.list.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            console.error(`Задачи с id ${id} не существует`);
            return null;
        }
        return taskIndex;
    },
    add: function(task) {
        alert(1);
        console.log(this);
        this.list.push(task);
    },
    remove: function(id) {
        debugger;
        console.log(this);
        const taskIndex = this.getTaskIndexById(id);
        if (taskIndex !== null) {
            this.list.splice(taskIndex, 1);
        }
    },
    sort: function() {
        this.list.sort((a, b) => a.priority - b.priority);
    },
    changeField: function(id, field, value) {
        const taskIndex = this.getTaskIndexById(id);
        if (taskIndex !== null) {
            const task = this.list[taskIndex];
            if (task[field]) {
                task[field] = value
            }
        }
    }
}

const newTask = {
    list: [{
        id: 1,
        name: 'тест',
        description: 'описание',
        order: 0,
    }]
}

// можно так
newTask.getTaskIndexById = toDoListOld.getTaskIndexById.bind(newTask)
console.log(newTask.getTaskIndexById(1));



// можем либо так
const newTaskAdd = toDoList.add.bind(newTask);

newTaskAdd({
    id: 2,
    name: 'тест1',
    description: 'описание1',
    order: 1,
});



//либо так
toDoList.add.call(newTask, {
    id: 3,
    name: 'тест2',
    description: 'описание2',
    order: 2,
});




// либо так
toDoList.remove.apply(newTask, [1]);




console.log(newTask.list);