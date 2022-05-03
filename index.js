// #region  H E A D E R
// <copyright file="mcodeTemplate.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Common JavaScript Template
 *      Module:   Modules (./mcodeTemplate.js)
 *      Project:  MicroCODE Common Library
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     February 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Common JavaScript Template.
 *      This file is copied to start all MicroCODE JavaScript code files.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO Style Guide
 *         https://student.emeritus.org/courses/3291/files/2554233/download?wrap=1
 *
 *      2. AirBnB JavaScript Style Guide
 *         https://github.com/airbnb/javascript
 *
 *      3. Turing School Style Guide
 *         https://github.com/turingschool-examples/javascript/tree/main/es5
 *
 *      4. MDN Web Docs - JavaScript Classes
 *         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 *      5. JSDoc - How to properly document JavaScript Code.
 *         https://
 *
 *      6. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      --------------------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  29-Apr-2022   TJM-MCODE  {0001}    New file for a REACT TO-DO App.
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

// #region  J A V A S C R I P T
// #region  F U N C T I O N S

// #region  C O N S T A N T S

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  M E T H O D S – P U B L I C

/**
 * App() – a REACT component to create a TO-DO List.
 *
 * @api public
 *
 * @param {type} param1 1st method parameter.
 * @returns method result.
 *
 * @example
 *
 *      App();
 *
 */
function App()
{
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);

    /**
     * addToDo() - adds a new Task to the TO-DO List.
     */
    const addTodo = text =>
    {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    /**
     * removeToDo() - removes an existing Task from the TO-DO List.
     */
    const removeTodo = index =>
    {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    };

    /**
     * returns the JSX code for the updated 'root' DIV.
     */
    return (
        <div className="app">
            <div className="todo-list" >
                { todos.map((todo, i) => (
                    <Todo key={ i } index={ i } todo={ todo } remove={ removeTodo } />
                )) }
                <TodoForm addTodo={ addTodo } />
            </div>
        </div>
    );
}

// #endregion

// #region  M E T H O D S – P R I V A T E

// #endregion

// #region  R E A C T
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// #endregion

// #endregion
// #endregion