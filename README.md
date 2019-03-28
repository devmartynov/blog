# Персональный блог Мартынова Дениса


> Дизайн макеты: https://github.com/devmartynov/my-site

## Структура

 - .storybook - конфигурация для Storybook
 - public - entry point проекта
 - src - код проекта
 
## Установка
1. Убедитесь что у вас установлен [nodejs](https://nodejs.org) и [yarn](https://yarnpkg.com)

2. Клонируйте репозиторий
    ```sh
    $ git clone
    ```

3. Перейдите в папку с проектом
    ```sh
    $ cd !$ или cd blog
    ```

4. Установите зависимости
    ```sh
    $ yarn
    ```

5. Запустите проект.
    ```sh
    $ yarn watch
    ```

> Проект доступен по адресу http://localhost:8000

## Команды

 - сборка в статичном виде
 
 ```
 $ yarn node webpack production
 ```

 - запуск storybook
 
    - для разработки
    
    ```
    $ yarn start-storybook -p 6006
    ```
    
    Storybook будет доступен по адресу http://localhost:6006
    
    - standalone-компиляция
    
    ```
    $ yarn build-storybook
    ```

