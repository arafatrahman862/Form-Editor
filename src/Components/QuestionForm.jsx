import React from 'react';
import Categorize from './Categorize';
import Cloze from './Cloze';
import Comprehension from './Comprehension';



const QuestionForm = () => {
    return (
        <div>
           <Categorize></Categorize>
           <Cloze></Cloze>
       <Comprehension></Comprehension>
          
        </div>
    );
};

export default QuestionForm;