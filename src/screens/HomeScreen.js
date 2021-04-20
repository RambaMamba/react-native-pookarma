import React from 'react';
import styled from 'styled-components'
import {Ionicons} from '@expo/vector-icons';
import Text from '../componenets/Text';
import PostData from "../Data/PostData";

export default HomeScreen = () => {

    const renderPost = ({item}) => (
        <PostContainer>
            <PostHeaderContainer>
                <PostProfilePhoto source={{uri: item.user.profilePhotoUrl}} />
                <Username>
                    <Text medium>{item.user.username}</Text>
                </Username>

            </PostHeaderContainer>
            <Post>
                <Text>{item.post}</Text>
                <PostPhoto source={{uri: item.photoUrl}} />
            </Post>
        </PostContainer>
    )

    return (

        <Container>
            <FeedContainer>
                <Text large light center>Feed</Text>
                <Feed data={PostData} renderItem={renderPost} keyExtractor={item => item.id.toString()}/>
            </FeedContainer>
            <StatusBar barStyle="dark-content" />
        </Container>

    );


}

const Container = styled.View`
    flex: 1;
    padding-top: 64px;
`;
const FeedContainer = styled.View``;
const StatusBar = styled.StatusBar``;
const Feed = styled.FlatList``;
const PostContainer = styled.View`
    margin: 16px 16px 0 16px;
    border-radius: 6px;
    padding: 8px;
`;
const PostHeaderContainer = styled.View`
    flex-direction: row;
    margin-bottom: 2px;
    align-items: center;
`;
const PostProfilePhoto = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;
const Username = styled.View`
    flex:1;
    margin: 0 16px;
`;
const Post = styled.View`
    margin-left: 64px;
`;
const PostPhoto = styled.Image`
    width: 100%;
    height: 150px;
    border-radius: 6px;
    margin-top: 5px;
`;