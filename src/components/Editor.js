import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import { useState } from 'react';


const Editor = (props) => {
    const { displayName, language, value, onChange } = props;
    const [open, setOpen] = useState(true);
    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open? "" : "collapsed"}`}>
            <div className='editor-title'>
                {displayName}
                <button className='xobutton' onClick={() => setOpen((prev) => !prev)}>{open? "X":"O"}</button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor