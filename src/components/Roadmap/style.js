import styled from '@emotion/styled'

const RoadmapStyle = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > .roadmap_title {
    color: ${({ theme }) => theme.primaryColor};
    & > h1 {
      text-align: center;
    }
    & > h3 > span {
      margin-left: 10px;
      margin-right: 10px;
      padding: 8px;
      border: solid 1px grey;
      &:first-of-type {
        background-color: white;
      }
      &:nth-of-type(2) {
        background-color: lightgrey;
      }
      &:nth-of-type(3) {
        background-color: grey;
      }
    }
  }
  & > .svg_image {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    & > img {
      width: 100%;
      transition: max-height 0.3s ease-in-out, height 0.3s ease-in-out;
      max-height: ${({ expanded }) => expanded ? '600vh' : '300px'};
      height: ${({ expanded }) => expanded ? 'auto' : '300px'};
      object-fit: cover;
      object-position: top;
    }
    & > span {
      cursor: pointer;
      display: block;
      border: solid 1px lightgrey;
      width: 100%;
      text-align: center;
      background-color: white;
      transition: background-color 0.1s ease-in-out;
      &:hover {
        background-color: lightgrey;
      }
    }
  }
`

export default RoadmapStyle
