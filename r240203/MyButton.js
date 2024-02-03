function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false)
    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 돔의 렌더 함수를 사용해 리액트 컴포넌트를 돔 컨테이너에 렌더링 하는 코드
const domContainer = document.querySelector('#root')
ReactDOM.render(React.createElement(MyButton), domContainer)