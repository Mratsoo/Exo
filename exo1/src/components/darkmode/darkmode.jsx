import { useState } from 'react';

function DarkModes() {
  const [darkMode, setDarkMode] = useState(true);

  const switchMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
 <button onClick={switchMode}  type="button" class={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}>{darkMode ? 'Light' : 'Dark'}</button>
    </>
  );
}

export default DarkModes;



{/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={switchMode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}