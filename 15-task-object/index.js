const toDoList = {
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
        this.list.push(task);
    },
    remove: function(id) {
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

toDoList.add({
    title: 'Выкинуть мусор',
    id: 1,
    priority: 2,
});

toDoList.add({
    title: 'Погулять',
    id: 2,
    priority: 3,
});

toDoList.add({
    title: 'Помыть посуду',
    id: 3,
    priority: 1,
});

toDoList.remove(3);
toDoList.sort();
toDoList.changeField(1, 'title', 'Сделать уроки');
