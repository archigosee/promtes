import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br/>
            <span className="orange_gradient ">
                AI-Powered Prompts
            </span>
        </h1>
        <p>
            Sunt eiusmod eiusmod duis sit Lorem officia occaecat dolore cupidatat ea.
        </p>

        <Feed/>
    </section>
  )
}

export default Home