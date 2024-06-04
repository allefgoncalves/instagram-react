import User from './User';
import Suggestions from './Suggestions';

export default function Sidebar(){
    return (
    <div className="sidebar">
        <User />
        <Suggestions />
    </div>
    );
}