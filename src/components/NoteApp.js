import React from 'react';
import { getInitialData } from '../utils/initialData';
import NoteList from './NoteList';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };
    }

    render() {
        return (
            <div className="note-app__body">
                <NoteList notes={this.state.notes} />
            </div>
        );
    };
}

export default NoteApp;