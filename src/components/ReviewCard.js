import React from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

export function ReviewCard() {

    let result = "";

    function randomName(){
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      result = characters.charAt(Math.floor(Math.random() * characters.length));
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function randomCensor(repeat){
      let starLen = "*";

      for (let i = 1; i < repeat; i++){
        starLen += "*"
      }
      return starLen;
    }

    function stringAvatar() {
        return {
          sx: {
            bgcolor:"rgb(145, 145, 145)",
            width: 56,
            height: 56,
          },
          children: `${result[0]}${result[1]}`,
        };
    }
    
  return (
    <div id="ReviewCard">
        {randomName()}
        <Avatar {...stringAvatar()} />
        <div id="reviewBottom">
            <div id="reviewWho">
                <Rating name="half-rating-read" value={Math.floor(Math.random() * (5)) + 1} size="small" precision={0.5} readOnly />
                <p>Wednesday, May 18, 2022</p>
                <p>{`${result[0]}${randomCensor(Math.floor(Math.random() * (6 - 1)) + 2)} ${result[1]}${randomCensor(Math.floor(Math.random() * (6 - 1)) + 2)}`}</p>
            </div>
            <div id="reviewText">
                <p>buraya yorum ekleburaya yorum ekledfsglldkflgkjdlfkdsakffkdlngkfldsgklfdlfjgksjdlkgfjfkldjgflkjdsgklfjsdkgjldksjlkdjgkldjkgjkdfgjlkfgdjkgfljskgjdlkfjgdpeorıgıoejrıgerogıjkdlfjglksdgkldngkfndklgdlfkjgkldjfgıdjfogjdflkgjdslkfjgkdljgkdjgıejrıgoejıgjıeogjeklgmdlfkmgkldsnlgkndfsklgmdfklgmldsfgjıdsjfgkljgfdslkgmdfklgfdnsıkuhsefusfkuhrakjfhjrkhfjkhrdkjhfjrjhfeuhfuıerhfuıhewpıfhdkgjndflkvnfdjkhoıeqhrjıoughreuıgjjergpewjgprıoewjfgıwehrguhewgkffjsdgndrngejhrpgıejgkfjkldfsjgldjgslgjfdısjgıdsjfgojdfgıjdoıfjgıdjfgojdıfjgofıdjgıfdjogıdsjıogfjoıdjgıodfjgıojdfıogjdfıjgodıfjgıodjsgıojdsfoıgjfdosıgjdosıgjoısjgıosjdfgoıdjıgsojdıosfjgıosjıfdsjogsdjgısojfgıdjgoıfjdıogjdfıogjdosıgjfdoısjgfdıogjıosjgoıffjdsıgodjfgjdfoıgjfıodsjgısjnecektir...dfsglldkflgkjdlfkdsakffkdlngkfldsgklfdlfjgksjdlkgfjfkldjgflkjdsgklfjsdkgjldksjlkdjgkldjkgjkdfgjlkfgdjkgfljskgjdlkfjgdpeorıgıoejrıgerogıjkdlfjglksdgkldngkfndklgdlfkjgkldjfgıdjfogjdflkgjdslkfjgkdljgkdjgıejrıgoejıgjıeogjeklgmdlfkmgkldsnlgkndfsklgmdfklgmldsfgjıdsjfgkljgfdslkgmdfklgfdnsıkuhsefusfkuhrakjfhjrkhfjkhrdkjhfjrjhfeuhfuıerhfuıhewpıfhdkgjndflkvnfdjkhoıeqhrjıoughreuıgjjergpewjgprıoewjfgıwehrguhewgkffjsdgndrngejhrpgıejgkfjkldfsjgldjgslgjfdısjgıdsjfgojdfgıjdoıfjgıdjfgojdıfjgofıdjgıfdjogıdsjıogfjoıdjgıodfjgıojdfıogjdfıjgodıfjgıodjsgıojdsfoıgjfdosıgjdosıgjoısjgıosjdfgoıdjıgsojdıosfjgıosjıfdsjogsdjgısojfgıdjgoıfjdıogjdfıogjdosıgjfdoısjgfdıogjıosjgoıffjdsıgodjfgjdfoıgjfıodsjgısjnecektir...</p>
            </div>
        </div>
    </div>
  )
}
