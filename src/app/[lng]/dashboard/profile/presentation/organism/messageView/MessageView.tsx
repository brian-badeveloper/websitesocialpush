"use client"

import './messageView.css'

import MessageForm from '../messageForm/MessageForm'
import getLanguage from '@/models/i18n';
import { MessageViewProps } from './MessageViewProps';

const MessageView = ({lng}: MessageViewProps) => {

  const translate = getLanguage(lng)

  return (
    <>
      <section className="message-view">
        <div className="message-view__row">
          <div className="message-view__card">
            <div className="message-view__card-content">
              <h2 className="message-view__card-title">{translate.DASHBOARD.PROFILE_BANNER_TITLE}</h2>
            </div>
          </div>
          <div className="message-view__form">
            <MessageForm lng={lng} />
          </div>
        </div>
      </section>
    </>
  )
}

export default MessageView