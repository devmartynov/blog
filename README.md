# ������������ ���� ��������� ������


> ������ ������: https://github.com/devmartynov/my-site

## ���������

 - .storybook - ������������ ��� Storybook
 - public - entry point �������
 - src - ��� �������
 
## ���������
1. ��������� ��� � ��� ���������� [nodejs](https://nodejs.org) � [yarn](https://yarnpkg.com)

2. ���������� �����������
    ```sh
    $ git clone
    ```

3. ��������� � ����� � ��������
    ```sh
    $ cd !$ ��� cd blog
    ```

4. ���������� �����������
    ```sh
    $ yarn
    ```

5. ��������� ������.
    ```sh
    $ yarn watch
    ```

> ������ �������� �� ������ http://localhost:8000

## �������

 - ������ � ��������� ����
 
 ```
 $ yarn node webpack production
 ```

 - ������ storybook
 
    - ��� ����������
    
    ```
    $ yarn start-storybook -p 6006
    ```
    
    Storybook ����� �������� �� ������ http://localhost:6006
    
    - standalone-����������
    
    ```
    $ yarn build-storybook
    ```

