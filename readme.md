**Правила коммитов**

_Коммит над решением задачи должен именоваться так: 'issue (номер задачи) коммент'_

_Каждая решенная задача должна иметь МИНИМУМ 1 коммит!_

_Все изменения даже если не доделанно должны быть в удаленном репозитории_

_Коммиты где чтото не доделано именуются так: '[in_progress] комментарий'_

_после выполнения недоделанного в предыдущем коммите должно начинаться с '[done]'_

**Общие правила**

_Код не должен содержать лишние переносы строк и лишние пробелы_

_Также код должен быть весь выровнен(в phpstorm есть комбинация ctrl+alt+L которая делает это автоматом)_

**Перед началом работы**

`git pull`

**В конце работы и после каждого изменения**

`git add --all`

`git commit -m '...'`

`git push`

**чтобы смержить с веткой develop(в ней будут находится результат слияния веток Dima и igor)**

`git pull`

`git merge --no-ff origin/develop`

`git push`

**Чтобы выйти из редактора при мерже**

_нажать shift+; и если появилось двоеточие в левом нижнем углу ввести q а затем нажать enter_

**Создать новую ветку из текущего коммита**

`git checkout -b new_breanch`

**Переключиться на существующую ветку(локальную только локальную)**

`git checkout branch_local`

**Переключиться на отдельный коммит**

`git checkout commit_hash`

**Модифицированный js - scrollovers.js строка 1200**
`       
                //когда достигли конца прокрутки следует включить прокрутку на следующий слайд
                if(tempscrool == newY){
                    if(tempwheel == 0) tempwheel =  that.wheelTimeout;
                    if(tempwheel + 5 < that.wheelTimeout){
                        $.fn.fullpage.setAllowScrolling(true);
                    }
                }else{
                    $.fn.fullpage.setAllowScrolling(false);
                    tempwheel = 0;
                    tempscrool = newY;
                }
        `