

        // greate JSON
        let tasks =[

            {
                "title": "قراءة كتاب",
                "date": "2/8/1985",
                "isDone": false
            },
            {
                "title": "انهاء المشروع النهائي",
                "date": "2/10/2025",
                "isDone": false
            },
            {
                "title": "قراءة قران",
                "date": "7/4/2003",
                "isDone": false
            },



        ]

        
        function getTasksfromStorage(){

            let retrievedTasks = JSON.parse(localStorage.getItem("myTask"))
            if(retrievedTasks == null){

                tasks = []
            }else{

                tasks = retrievedTasks
            }
            // tasks = retrievedTasks ?? [] <= this is a short code to the code above
        }
        getTasksfromStorage()

        // add json to the main task div

        function fillTasksOnThePage (){

            let main_tasks = document.getElementById('main-tasks')
            main_tasks.innerHTML = ''
            let index = 0
            tasks.forEach(element => {
                
                

                    main_tasks.innerHTML +=
                    
                    `
                    
                    
                        <div class="task ${element.isDone? 'done' : ''}">
                
                                <div class = "div-one" style="width:70%; overflow:hidden">
                                    <h2 style="margin-bottom: 10px;" >${element.title} </h2>
                                    

                                    <div>
                                        <i class="fa-solid fa-calendar-days"></i>
                                        <span>${element.date}</span>
                                        
                                    </div>
                                </div>

                                <div class="button-div" style="width: 20%;display: flex; justify-content: space-between; align-items: center; ">
                                    <button onclick = "deleteTask(${index})" class="circular" style=" background-color: rgb(114, 0, 0); flex-shrink: 0; color: #fff"><i class="fa-solid fa-trash-can"></i></button>
                                    ${element.isDone? `<button onclick = "completeTask(${index})" class="circular" style="background-color: rgb(118, 0, 101);flex-shrink: 0; color: #fff"><i class="fa-solid fa-close" ></i></button>` : `
                                    
                                    <button onclick = "completeTask(${index})" class="circular" style="background-color: rgb(0, 150, 30);flex-shrink: 0; color: #fff"><i class="fa-solid fa-check"></i></button>
                                    
                                    `}
                                    
                                    <button onclick = "editTask(${index})" class="circular" style="background-color: rgba(0, 16, 197,0.692);flex-shrink: 0; color: #fff"><i class="fa-solid fa-pen"></i></button>
                                </div>
                
                        </div>
                
                
                
                `
                index++
            
            });

        }

        fillTasksOnThePage ()
        

        

        

        // create content
        document.getElementById('add-btn').addEventListener('click', function(){
            let now = new Date()
            let date = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear() + ' | ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
            
            let taskName = prompt("الرجاء ادخال عنوان المهمة")
            

            let taskObj = {

                "title": taskName,
                "date": date,
                "isDone": false
            }

            if(taskName.trim() !== '' && taskName !== null){

                tasks.push(taskObj)
                storeTasks()
                fillTasksOnThePage()

            }

            
            
            
            
        })

        


        // delete task

        function deleteTask(index) {
            let task = tasks[index]
            console.log(task.title)
            let isConfirmed = confirm(` هل انت متاكد من حزف : ${task.title}؟`)
            if (isConfirmed == true){

                tasks.splice(index,1)
                storeTasks()
                fillTasksOnThePage()

            }
            
        }


        // edit task

        function editTask(index){

            let task = tasks[index]
            let newTaskTitle = prompt('الرجاء ادخال عنوان المهمة الجديد', task.title )
            if(newTaskTitle !== '' && newTaskTitle !== null){

                task.title = newTaskTitle
                storeTasks()
                fillTasksOnThePage()

            }
            
            
        }



        // task is done 

        function completeTask(index){

            let task = tasks[index]
            if(task.isDone){

                task.isDone = false
            }else{

                task.isDone = true
            }
            storeTasks()
            
            fillTasksOnThePage()
            
            


        }


        // STORAGE FUNCTIONS

        function storeTasks(){

            let tasksString = JSON.stringify(tasks)
            localStorage.setItem("myTask", tasksString)

        }
        
    