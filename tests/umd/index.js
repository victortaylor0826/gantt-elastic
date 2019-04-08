// just helper to get current dates
function getDate(hours) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const timeStamp = new Date(`${currentYear}-${currentMonth}-${currentDay} 00:00:00`).getTime();
  return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
}

let tasks = [
  {
    id: 1,
    label: 'Make some noise',
    user: '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
    start: getDate(-24 * 5),
    duration: 15 * 24 * 60 * 60,
    percent: 85,
    type: 'project'
    //collapsed: true,
  },
  {
    id: 2,
    label: 'With great power comes great responsibility',
    user:
      '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
    parentId: 1,
    start: getDate(-24 * 4),
    duration: 4 * 24 * 60 * 60,
    percent: 50,
    type: 'milestone',
    collapsed: true,
    style: {
      base: {
        fill: '#1EBC61',
        stroke: '#0EAC51'
      }
      /*'tree-row-bar': {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            },
            'tree-row-bar-polygon': {
              stroke: '#0EAC51'
            }*/
    }
  },
  {
    id: 3,
    label: 'Courage is being scared to death, but saddling up anyway.',
    user: '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
    parentId: 2,
    start: getDate(-24 * 3),
    duration: 2 * 24 * 60 * 60,
    percent: 100,
    type: 'task'
  },
  {
    id: 4,
    label: 'Put that toy AWAY!',
    user: '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
    start: getDate(-24 * 2),
    duration: 2 * 24 * 60 * 60,
    percent: 50,
    type: 'task',
    dependentOn: [3]
  },
  {
    id: 5,
    label: 'One billion, gajillion, fafillion... shabadylu...mil...shabady......uh, Yen.',
    user:
      '<a href="https://www.google.com/search?q=Austin+Powers" target="_blank" style="color:#0077c0;">Austin Powers</a>',
    parentId: 4,
    start: getDate(0),
    duration: 2 * 24 * 60 * 60,
    percent: 10,
    type: 'milestone',
    style: {
      base: {
        fill: '#0287D0',
        stroke: '#0077C0'
      }
    }
  },
  {
    id: 6,
    label: 'Butch Mario and the Luigi Kid',
    user: '<a href="https://www.google.com/search?q=Mario+Bros" target="_blank" style="color:#0077c0;">Mario Bros</a>',
    parentId: 5,
    start: getDate(24),
    duration: 1 * 24 * 60 * 60,
    percent: 50,
    type: 'task',
    collapsed: true,
    style: {
      base: {
        fill: '#8E44AD',
        stroke: '#7E349D'
      }
    }
  },
  {
    id: 7,
    label: 'Devon, the old man wanted me, it was his dying request',
    user:
      '<a href="https://www.google.com/search?q=Knight+Rider" target="_blank" style="color:#0077c0;">Knight Rider</a>',
    parentId: 2,
    dependentOn: [6],
    start: getDate(24 * 2),
    duration: 4 * 60 * 60,
    percent: 20,
    type: 'task',
    collapsed: true
  },
  {
    id: 8,
    label: 'Hey, Baby! Anybody ever tell you I have beautiful eyes?',
    user:
      '<a href="https://www.google.com/search?q=Johhny+Bravo" target="_blank" style="color:#0077c0;">Johhny Bravo</a>',
    parentId: 7,
    dependentOn: [7],
    start: getDate(24 * 3),
    duration: 1 * 24 * 60 * 60,
    percent: 0,
    type: 'task'
  },
  {
    id: 9,
    label: 'This better be important, woman. You are interrupting my very delicate calculations.',
    user:
      '<a href="https://www.google.com/search?q=Dexter\'s+Laboratory" target="_blank" style="color:#0077c0;">Dexter\'s Laboratory</a>',
    parentId: 8,
    dependentOn: [8, 7],
    start: getDate(24 * 4),
    duration: 4 * 60 * 60,
    percent: 20,
    type: 'task',
    style: {
      base: {
        fill: '#8E44AD',
        stroke: '#7E349D'
      }
      /*'tree-row-bar-polygon': {
              stroke: '#7E349D'
            },
            'tree-row-bar': {
              fill: '#8E44AD',
              stroke: '#7E349D'
            }*/
    }
  },
  {
    id: 10,
    label: 'current task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 5),
    duration: 24 * 60 * 60,
    percent: 0,
    type: 'task'
  },
  {
    id: 11,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 6),
    duration: 24 * 60 * 60,
    percent: 0,
    type: 'task'
  },
  {
    id: 12,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 7),
    duration: 24 * 60 * 60,
    percent: 0,
    type: 'task',
    parentId: 11
  },
  {
    id: 13,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 8),
    duration: 24 * 60 * 60,
    percent: 0,
    type: 'task'
  },
  {
    id: 14,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 9),
    duration: 24 * 60 * 60,
    percent: 0,
    type: 'task'
  },
  {
    id: 15,
    label: 'test task',
    user:
      '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
    start: getDate(24 * 16),
    duration: 24 * 60 * 60,
    percent: 0,
    type: 'task'
  }
];

let options = {
  slots: {
    header: {
      beforeOptions: `<button style="display:inline-block" onclick="alert('hello from header!')">test</button>`
    }
  },
  taskMapping: {
    progress: 'percent'
  },
  maxRows: 100,
  maxHeight: 300,
  title: {
    label: 'Your project title as html (link or whatever...)',
    html: false
  },
  row: {
    height: 24
  },
  calendar: {
    hour: {
      display: false
    }
  },
  chart: {
    progress: {
      bar: false
    },
    expander: {
      display: true
    }
  },
  taskList: {
    expander: {
      straight: false
    },
    columns: [
      {
        id: 1,
        label: 'ID',
        value: 'id',
        width: 40
      },
      {
        id: 2,
        label: 'Description',
        value: 'label',
        width: 200,
        expander: true,
        html: true,
        events: {
          click({ data, column }) {
            alert('description clicked!\n' + data.label);
          }
        }
      },
      {
        id: 3,
        label: 'Assigned to',
        value: 'user',
        width: 130,
        html: true
      },
      {
        id: 3,
        label: 'Start',
        value: task => dayjs(task.start).format('YYYY-MM-DD'),
        width: 78
      },
      {
        id: 4,
        label: 'Type',
        value: 'type',
        width: 68
      },
      {
        id: 5,
        label: '%',
        value: 'progress',
        width: 35,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      }
    ]
  },
  locale: {
    code: 'en',
    Now: 'Now',
    'X-Scale': 'Zoom-X',
    'Y-Scale': 'Zoom-Y',
    'Task list width': 'Task list',
    'Before/After': 'Expand',
    'Display task list': 'Task list'
  }
};

// create instance
window.app = new Vue({
  components: {
    'gantt-header': Header,
    'gantt-elastic': GanttElastic,
    'gantt-footer': {
      template: `<span>this is a footer</span>`
    }
  },
  data: {
    tasks: tasks.map(task => Object.assign({}, task)),
    options,
    destroy: false
  }
});

// gantt state which will be updated in realtime
let ganttState, ganttInstance;

// listen to 'gantt-elastic.ready' or 'gantt-elastic.mounted' event
// to get the gantt state for real time modification
app.$on('gantt-elastic-ready', ganttElasticInstance => {
  ganttInstance = ganttElasticInstance;

  ganttInstance.$on('tasks-updated', tasks => {
    app.tasks = tasks;
  });
  ganttInstance.$on('options-updated', options => {
    app.options = options;
  });

  ganttInstance.$on('chart-task-mouseenter', ({ data, event }) => {
    console.log('task mouse enter', { data, event });
  });
  ganttInstance.$on('updated', () => {
    //console.log('gantt view was updated');
  });
  ganttInstance.$on('destroyed', () => {
    //console.log('gantt was destroyed');
  });
  ganttInstance.$on('times-timeZoom-updated', () => {
    console.log('time zoom changed');
  });
  ganttInstance.$on('taskList-task-click', ({ event, data, column }) => {
    console.log('task list clicked! (task)', { data, column });
  });
});

// mount gantt to DOM
app.$mount('#app');

function update() {
  const row = document.getElementById('row').value;
  const name = document.getElementById('name').value;
  const value = document.getElementById('value').value;
  app.tasks[row][name] = value;
}

function deleteRow() {
  const row = Number(document.getElementById('delrow').value);
  app.tasks = ganttState.tasks.filter((task, index) => {
    if (index === row) {
      console.log('removing task', task, index);
    }
    return index !== row;
  });
}

function progressChange() {
  const row = Number(document.getElementById('progRow').value);
  const percent = Number(document.getElementById('progress').value);
  app.tasks[row].progress = percent;
}

function addTask() {
  const task = {
    id: 88,
    label:
      '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">Yeaahh! you have added a task bro!</a>',
    user:
      '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">Awesome!</a>',
    parentId: 7,
    dependentOn: [7],
    start: getDate(24 * 3),
    duration: 1 * 24 * 60 * 60,
    percent: 50,
    type: 'project'
  };
  app.tasks.push(task);
  console.log(app.tasks);
}

function addTasks() {
  const newTasks = tasks.map(task => Object.assign({}, task));
  app.tasks = newTasks;
}

function changeOptions() {
  app.options.taskList.columns[0].label = 'Whooaa!';
  app.options.taskList.columns[0].width = 100;
  app.options.taskList.columns[0].style = {
    'task-list-header-column': {
      background: 'red',
      color: 'white'
    }
  };
  Vue.set(app.options.calendar, 'month', {
    format: {
      long: function() {
        return ':P';
      }
    }
  });
  Vue.set(app.options, 'times', { timeZoom: 2 });
  app.options.locale['Now'] = 'Center';
  ganttInstance.fixScrollPos();
}

function destroy() {
  app.destroy = true;
}
