import React from 'react';

import s from '../TeamForm/TeamForm.module.css';

export class TeamForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedForm: null,
        }

        const FORMS = [
            {
                form: 'W',
                className: 'win'
            },
            {
                form: 'D',
                className: 'drawn'
            },{
                form: 'L',
                className: 'lost'
            }
        ]

        if(props.teamForm){
            FORMS.map(item => {
                if(item.form.toUpperCase() === props.teamForm.toUpperCase()){
                    this.state = {
                        ...this.state,
                        selectedForm: item,
                    }
                }
            })
        }
    }
    render(){
        return(
            <div>
                {(this.state.selectedForm) ? (
                    <div class={`${s.teamForm} ${s[this.state.selectedForm.className]}`}>
                        {this.state.selectedForm.form}
                    </div>
                ) : ('')}
            </div>
        )
    }
}
