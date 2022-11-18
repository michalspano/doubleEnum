import {StyleSheet, css} from 'aphrodite-jss'

function App() {
  return (
    <div>
      <span className={css(styles.title)}>double enum</span>
    </div>
  );
}

export default App;

const styles = StyleSheet.create({
    title: {
        backgroundColor: 'red'
    }
})
