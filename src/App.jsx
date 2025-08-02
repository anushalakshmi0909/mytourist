import {React} from 'react';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <main>
                <h2>Welcome to My Application</h2>
                <p>This is the main content area.</p>
            </main>
        </div>
    );
}
export default App;