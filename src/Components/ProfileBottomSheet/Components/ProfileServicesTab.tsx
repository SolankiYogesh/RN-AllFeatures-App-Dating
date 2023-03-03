import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import _ from 'lodash'

import {Color, Fonts, Screen} from '../../../Helpers'
import {moderateScale, verticalScale} from '../../../Helpers/Responsive'
import AppScrollView from '../../AppScrollView'

const POSTERS = [
  {
    text: t('FD284'),
    screen: Screen.PollsScreen,
    hintText: 'Nehme mit der gesamten Fyerdates Community an unterschiedlichen Abstimmungen teil!',

    image:
      'https://enterprisersproject.com/sites/default/files/styles/google_discover/public/images/cio_poll.png?itok=ma3tNiiL'
  },
  {
    text: t('FD281'),
    screen: Screen.DiscussionsScreen,

    hintText: 'Diskutiere ausgiebig mit der Fyerdates-Community',

    image:
      'https://static.vecteezy.com/system/resources/previews/002/173/297/non_2x/business-colleagues-have-a-discussion-with-speech-bubbles-free-vector.jpg'
  },
  {
    text: t('FD282'),
    screen: Screen.GiveawayScreen,

    hintText: 'give something freely as a gift or donation',
    image: 'https://sendpulse.com/blog/wp-content/uploads/2021/07/giveaway-cover-1-1200x900.png'
  },
  {
    text: t('FD283'),
    screen: Screen.AwardScreen,

    hintText: 'token of recognition of excellence',
    image:
      'https://static6.depositphotos.com/1000975/590/i/600/depositphotos_5903034-stock-photo-star-award-against-gradient-background.jpg'
  }
]
const ProfileServicesTab = () => {
  const navigation: any = useNavigation()

  const onPressPoster = (item: any) => {
    navigation.navigate(item?.screen)
  }

  const posterItem = (item: any) => {
    return (
      <TouchableOpacity onPress={() => onPressPoster(item)}>
        <Image
          source={{
            uri: item?.image
          }}
          style={styles.imageView}
          resizeMode={'cover'}
        />
        <View style={styles.absoluteView}>
          <Text style={styles.bigText}>{item?.text}</Text>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.smallText}>
            {item?.hintText}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <AppScrollView showsVerticalScrollIndicator={false}>
      {_.map(POSTERS, (i: any) => {
        return posterItem(i)
      })}
    </AppScrollView>
  )
}

export default ProfileServicesTab

const styles = StyleSheet.create({
  imageView: {
    width: '90%',
    alignSelf: 'center',
    height: verticalScale(150),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(15)
  },
  absoluteView: {
    position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    bottom: verticalScale(10),
    marginBottom: verticalScale(15)
  },
  bigText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
    color: Color.white
  },
  smallText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Color.white
  }
})
