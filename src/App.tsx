import ImagesBox from './components/ImagesBox'
import ActionButtons from './components/ActionButtons'

import s from './app.module.scss'

const App = () => {
  return (
    <div className={s.wrapper}>
      <ImagesBox />
      <ActionButtons />
    </div>
  );
}

export default App;
