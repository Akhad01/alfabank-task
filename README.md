# Альфа-Банк “Тестовое задание для прохождения практики (стажировки)”

## PROJECT START-UP:

1. First clone this repository

```shell
git clone https://github.com/Akhad01/alfabank-task.git
```

2. Access the alfabank-task folder

```shell
cd alfabank-task
```

3. Run npm install to install dependencies

```shell
npm install
```

4. Run npm run dev to launch the project at http://localhost:3000/

```shell
npm run dev
```

or

```shell
npm run build
```

## ЗАДАНИЕ:

Создать SPA со списком карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта. Для задачи можно выбрать любое публичное api, например, https://github.com/public-apis/public-apis 

1. Пришедшие данные хранятся в сторе. 
2. На карточке должна быть иконка лайка, при нажатии на которую, ставится или убирается лайк. Иконка должна подкрашиваться, когда залайкана. 
3. На карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется. 
4. Сверху должна быть кнопка фильтра, которая по нажатию показывает только залайканые карточки. При отжатии опять показываются все карточки.
5. Контент карточки(текст) должен быть урезан,чтобы у карточек была одинаковая высота.
6. При клике на любом месте карточке (кроме иконки лайка и кнопки удаления) мы должно попадать на отдельную страницу карточки. Уже в нем мы видим полный текст карточки. Так же, на этой странице должна быть кнопка вернуться к списку карточек

Дизайн не важен, главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже. Остальные решения на ваше усмотрение. 


**_Стэк:_**

1. Typescript.
2. React.
3. Redux-toolkit (rtk-query).
4. Firebase или другой сервис для хранения данных пользователей и избранных мест.
