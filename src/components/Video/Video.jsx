import s from './Video.module.scss'

const Video = ({src}) => {
  return (
    <iframe className={s.video} src={src}/>
  )
}

export default Video;
