// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
        console.log(this.state.settings.bitrate)
    }

    handleVideoResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings.video.resolution)
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrateClick}>Increase Bitrate</button>
                <button className='resolution' onClick={this.handleVideoResolutionClick}>Decrease Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;