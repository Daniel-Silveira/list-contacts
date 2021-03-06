import styled from 'styled-components'

export const Container = styled.div`
  width: 20%;
  transition: 0.5s;
  margin-right: 1%;
  margin-top: 1em;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
`

export const BoxProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.primaryColor}61;
  margin-bottom: 2em;
`

export const Image = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1em;
  img {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }
`

export const Name = styled.h4`
  color: ${({ theme }) => theme.title};
  margin: 0;
  margin-bottom: 0.5em;
  text-transform: capitalize;
`

export const Type = styled.p`
  color: ${({ theme }) => theme.description};
  margin: 0;
  font-size: 0.8em;
`

export const Button = styled.button.attrs((props: any) => {})`
  border: none;
  background-color: ${({ active, theme }) => (!!active ? theme.card : 'transparent')};
  border-radius: 12px;
  padding: 1.2em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.title};
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.title};
  }
  span {
    font-weight: 600;
    margin-left: 1em;
    font-size: 1em;
  }
`
