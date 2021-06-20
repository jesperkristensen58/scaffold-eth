import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import shortid from 'shortid'
import WindowModal from '../gameItems/components/WindowModal'
import { connectController as wrapGlobalGameData } from '../gameItems'

const NewLevel = props => {
  console.log('NewLevel:')
  console.log({ props })
  const { actions } = props

  return (
    <div id='newLevel'>
      <WindowModal
        uniqueWindowId={shortid()}
        initWidth={400}
        initHeight={600}
        initTop={100}
        initLeft={100}
        backgroundPath='./assets/trimmed/window_trimmed.png'
        dragAreaHeightPercent={20}
        onRequestClose={() => console.log('onRequestClose')}
        isOpen
        contentContainerStyle={{ marginTop: '20%', paddingLeft: 20, paddingRight: 20 }}
      >
        <div style={{ color: 'white' }}>
          <p>Lorem Ipsum</p>
          <Button block onClick={() => console.log('set dialog')}>
            Set Dialog
          </Button>
          <Button block onClick={() => actions.dialog.continueDialog()}>
            Advance Dialog
          </Button>
          <Button block onClick={() => actions.wallet.showWallet()}>
            Show Wallet
          </Button>
          <Button block onClick={() => actions.wallet.hideWallet()}>
            Hide Wallet
          </Button>
          <Button block onClick={() => actions.wallet.toggleWalletVisibility()}>
            Toggle Wallet
          </Button>
          <Button block onClick={() => actions.terminal.showTerminal()}>
            Show Terminal
          </Button>
          <Button block onClick={() => actions.terminal.hideTerminal()}>
            Hide Terminal
          </Button>
          <Button block onClick={() => actions.terminal.toggleTerminalVisibility()}>
            Toggle Terminal
          </Button>
          <Button block onClick={() => console.log('set background')}>
            Set Background
          </Button>
        </div>
      </WindowModal>
    </div>
  )
}

export default wrapGlobalGameData(NewLevel)