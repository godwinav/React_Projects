import React from 'react';
import ReactDOM, { render } from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
       
        <div className="ui container comments">
            <ApprovalCard>
                    <CommentDetails 
                        author="Godwin" 
                        time="Yesterday at 8:28PM" 
                        comment="Don't Give Up!"
                        avatar={faker.image.avatar()}
                    />
            </ApprovalCard>  

            <ApprovalCard>  
                <CommentDetails 
                    author="James" 
                    time="Yesterday at 6:57PM" 
                    comment="If there's Life, There's Hope"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            
            <ApprovalCard>       
                <CommentDetails 
                    author="Edem" 
                    time="Today at at 2:21PM"
                    comment="Hot Afternoon"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>  

            <ApprovalCard>   
                <CommentDetails
                    author="Yawson"
                    time="Today at 10:45AM" 
                    comment="Good Morning!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>    

            <ApprovalCard>      
                <CommentDetails 
                    author="Millicent"
                    time="Today at 2:00AM" 
                    comment="Life's What you Make It"
                    avatar={faker.image.avatar()}
                  />
            </ApprovalCard> 

         </div>
    );

};

ReactDOM.render(<App/>, document.querySelector("#root"));