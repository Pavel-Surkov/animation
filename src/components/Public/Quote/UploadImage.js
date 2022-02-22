import React from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import uploadImage from '../../../assets/svg/uploadIcon.svg'
import classes from './UploadImage.module.scss'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  // Validate image type
  // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  // if (!isJpgOrPng) {
  //   message.error('You can only upload JPG/PNG file!')
  // }

  // TODO allow validation in HOC
  // const isLt2M = file.size / 1024 / 1024 < 2
  // if (!isLt2M) {
  //   message.error('Image must smaller than 2MB!')
  // }
  // return isJpgOrPng && isLt2M
  // return isLt2M

  return true
}

class UploadImage extends React.Component {
  state = {
    loading: false,
  }

  handleChange = (info) => {
    debugger
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      )
    }
  }
  handleUpload = (info) => {
    debugger
    console.log(info)

    setTimeout(() => {
      info.file.status = 'done'
    }, 5000)
  }

  render() {
    const { loading, imageUrl } = this.state
    const uploadButton = (
      <div className={classes.uploadContainer}>
        {loading ? <LoadingOutlined /> : <img src={uploadImage} alt="uplio" />}
      </div>
    )
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={true}
        action={this.handleUpload}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
          </>
        ) : (
          uploadButton
        )}
      </Upload>
    )
  }
}
export default UploadImage
