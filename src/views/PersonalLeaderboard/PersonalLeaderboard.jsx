import "./PersonalLeaderboard.css"

const PersonalLeaderboard = (props) => {

    // https://stackoverflow.com/questions/36608611/why-does-math-min1-2-return-nan
    const bestTime = Math.min(...props.personalLeaderboard.map(record => record.time))
    const bestTimeObj = props.personalLeaderboard.find(record => record.time === bestTime)

    return (
        <main className="leaderboard-wrapper">
            <h1 className="leaderboard-title">🏆 Your personal records</h1>
            {
                props.personalLeaderboard.length > 0 &&
                <>
                    <p className="personal-best">Personal best: {bestTimeObj.rolls} rolls in {bestTimeObj.formattedTime}</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Rolls</th>
                            </tr>
                                {
                                    props.personalLeaderboard.map(record => {
                                        return (
                                            <tr className={`${record.id === bestTimeObj.id ? 'best-time' : ''}`} key={record.id}>
                                                <td>{record.date}</td>
                                                <td>{record.formattedTime}</td>
                                                <td>{record.rolls}</td>
                                            </tr>
                                        )
                                    })
                                }
                        </tbody>
                    </table>
                </>
            }
            {
                props.personalLeaderboard.length === 0 && "No records set!"
            }
        </main>
    )
}

export default PersonalLeaderboard