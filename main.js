const bodyElement = document.querySelector('body')

function darkMode() {

    bodyElement.classList.toggle('dark')

    console.log('a cor foi trocada')
}

// Criando post para inserção
let novoPost = {
    foto:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUZGRgaGhwaHBoZHBgaGRkaGhgZGRocGBkcIy4lHB8rHxgZJzgmKy8xNTU1HCQ7QDs0Py40NTUBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA8EAACAQMCBAMGBAQGAwADAAABAhEAAyESMQQFQVEiYXEGEzKBkaFCUrHwFGLB0QcjcpLh8RWCohZTY//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAJBEAAgICAQUAAgMAAAAAAAAAAAECESExEgMTQVFhIjJCcYH/2gAMAwEAAhEDEQA/APZRXa4K7QAqVKlQAqVKlQAqVKlQAqVKlQBFeuBVZjsoJPoBNfOvL+IbiOJdix1XGdzpPiljqOGXIk9K919rr2jguKb/APjcA9WQqPua+d+GdrTK6kgg9KiTLgrNvyHnLcDf1E/5bGLiZEDcugODB30/MZFezWrqsoZSCpAII2IO1eN3bi37aM5YnqGWCpxBUmDmPiBPQRE1r/8ADznCsh4fVOidG3wgkFfkR+vapjKnQ5K1ZtblQ3GqRxUV04q2QD+LMisZ7Qg6TWy4hOtY32jU5rn6ujfpbMZxImg/ECDRfisTQviBOaygbyKNw1Ru0R/hndgqKWY9AJNWk9nHI8V2yjY8JZmOehKKVB+dbJpGTTM3cFQNRDj+Fe25RwJHYyCCJBUjcGqJFaxMmMRop6A/F2pjDFSkQnqabGjiHrSekqwKTCpK8ELCkFNdZqStVmeDg3pjGnHeuhJphtD7TwMb1bsXn6MQPWhxNTJeqZRKjKgpht9+4qC5ye5GpVLDyGam4S+Oo8/Oio52RgDyHpWPKUXg2qMv2Mv/AA7/AJG/2mlWl/8AMP8AmH+0UqruP0R24+z6dFdrgrtbnMKlSpUAKlSpUAKlSpUAKlSpUACPae1q4TiFx4rbqJ7ssD7mvn9uEaVHQ5BMQe4869t/xDQvwZtKWBuXLayvxABxcaPMrbIHmRXlVlL7vpXSiqAoB/DGJPU5wSMgnMVlN5NenotcNxC27DAOAI+FYKyN5Vzg5Gx7d6p8Bzr3PEJeSQdRmYBI8IZX85yDuRpmiF1IYDiQFLAK+NRkTpOTJyPC0kMJG+2d4q2mplUBjGpW3VlUBZXbLCD/AOpmou2Ue88q51bv29asMEhhIlSNwflmrusEYr5uCKrl7jkAYYBjpbAZdoJHQdysd4Ncv5zdVS1ni7iMSAqPLbsYB1GMIJmOo71pywZuJ7XxZrJe0EQawfBe2nMGeNYcNMalUTsBpIjMnarF72pd9Zu2iqqSrsAdKuphhnqM4rPqXJYNOn+LyMvLj61THBiNTkquYjLNG+geXU7DzOKVrmKP4wCUECNizEnfssQT16DuLnB8O90hnyWC6VyAqA4Gxx5eQ71jGLWzeUk9FXg+EuXmKonurYPiggsR/OT8XfTgDyq1zHhRbChSI2EE5nqRmD5eXzrQtcTh0C6ZPWIGTmsnzItcedgWwB08wPpWiMwB7QKNaAdLa9vzORt5EUIZaJcybVcY9jA9FGkfpQ9xWqIYwjw/OrFtRAmqxOKmVxFJlRoVwiYqtcbpTWfM0gKpKiZOzq2prrW4E1btrFV+LOQKSlboHFJEVPSoxTjtNUxELGuA101yqM2WFerFh5M9qogVLZv6T3qXEtSrYR955UqqfxY/KfrSrPgy+aPr0V2uCu1uc4qVKlQAqVKlQAqVKlQAqVKlQBiP8Uec27HBOrFTdcqLaz4tUjxADMKJP2615TwHOH0BTOq58EYJmYie+R2+9XP8UbovcyftbRLfXJALn7v07VmxfKkiegOQNO2AJ+E5me9ZSpmsU0gnxTOyAu4LFvAwMquZ6dpY6fI9qba4ZhpIACeLqY92060Un+U/ICaatt9KgKS0hs5hRkCOp39Y9a0Xs1wLkM1wK6xjfYqVBA7CFwO8T0qLLoBnh0QmVMABpDSTmSFBmTA2PRs13geCS4xTSLbAkMrsGdjpK+EbgA6SWyTPYYXstbu3r7kNIBhiYx8SyRt+InbptWlewlvi3YKTrtiSV+FghYnV+E4BIwT4fmm6wFATguUm7pdFB03gCSQE0anYwV+KBOOgVaocFwz+MOwMuwfxHUG1YJkQ0ld4Jz60b4ThWdLFm1c0RNx9J8WjWqqPNjvn8w3iq/u7dl3soysWJjUPGu0rg7gq0DzHpTsVFfheDnMDRgFdI1YGoGBtvtHT51s+E4XSqsmRAwNo6AYJJ2oDd4BpUp4WaFYHxIDhnBEjwwztGOg6mi3JeP0OFeTiADAGIUkAdZxnc1m7KWi5zLl+sTGo9hv5xmKx/F3ymtwukL4E83aQI9AC3/rHWtd7S3NCI1pgC5BWZliDO30ER19Kw3tIz+9dXY7h9HRGuIjOB/7T9AOlNPJXgzlwVUc1fvCqLrmtImciu1dApOK5abMGtCVsiapbNNuJTVwae0GmECAMg1U4nLfKpUeorwyKziqZcsoai1NowajtirqbbUSdAlgFsK6q1JcHiPamxPpWlmdDSZ2rmmnEgbUgZpgNilTopUrCj7FFdrgrtUZipUqVACpUqVACpUqVAHKbcaATTqB+2HGmzwd+4phlttHXMRsd6GB8+c944PxN24fxO7ddtRgdelRcBwr3iNFpmJIjfJ6eooYSbmFwBvWt9jOZC1dTXEfA2MQIKsMxjP1FYStL6bxeRJxF6WVODYm2IYg6VUxgHBPYjIIxRX2W9rLYuLb4m1oklNa6dLMfCRcgDMn4vTtWj4O2FfirOoB79w8TZY4FxHVVIU9WVgZHSR3rK8fyQcJy65aushuMwdsKdJwFVGI1DC5I3rJdSKbi/lf6XTeTS8y4O3wyMqKBqYywEyDLg+cb+sE0JF9nUwultOkGVlgTBzAzIYx2J8qiPHNe5fw7NJZtKTJklSVJP+wGqnAXFOrVscbYMmck9NoPSMdKUVscvDNFyC2qM0INQ92oaGB8OhYzkeECflQUcgu3eZu7qy27f+YSdsToAIncg/JT5V6B7N8smXOFEQJkCAMfIj7DyqHmvF3Xtu/Dm0qDUTduElW0/EQqxKgA5J6bRTcuOf8ACVkyvM+McPpRQ6rOvCAFSJhTjp8zVS4QyktJDKQplSwBYSSMbkE+cZqG8eJsol/iLaXOHuaSLtoRoViIJRhgbb0Q5iqShQYIJ0kDT4iII+QG2+d5w8WFYA3PeKNsW7h1GPAgLAhdC4GPwnrn06QF4m4XJdjLMSScZJyTjzNa3mPL0e3LDV4JG5IYADDDfAjORG9Y7TiBtTxQ0ynxAqldWr1xaq3FqoksptUJqdlqJhWqM2PbImomWpLbYimNihFPVj7TU+6JE1DPauB8RSryPl4H26sl4Wq8bEUmaSBSasd0h77ADrUekDEV0HJNMY00L6RNSU1xjSqzLyTSKVRTSpUVyPsgV2minVRmKlSpUAKlSpUAKlSpUAcrA/4rcw93wujPjMRO4iTI6/s1vq8b/wAYePV7tu0rAlVJaD8JMQD2P7ipk8FRWTDXLahZU7j0/Wq9i4UMgjf998b1TtqzArqMDEYP603SV2JP3A+XSsUq8m7d+D0n2b5zbvKnDcUFdB4kcyrWzG4IgqYb4h/3W/xF5Pwtu0rI912ZvDNxnUCCchjv0nzrM8o4cRqcnByAd1IO4OCMdM7Ypc6uO8M2VQQoiAo21RO/aoaXJNDWh3LualrFuyFj3eo5P5pyAOuaM8ptMGnbSQQO4A6+eY+RrK8mtuXEbkgz962y3SqCTmZPQ9t6iclGVLyaQg5Rtmm9s+f+74Epw7/5l8QCshlTTLnuDECfOqnsfx9rieX/AMG7BHW21plY6W0lSs/TrWGa2965b1AgWyQQNtDGdQ7x1r0zmPNeDKqr8OlxwBgopOQCNx2E/KnLKS8kUkynxZA4JOW2bnv7mhUe5JK2kBBdnYnwmJCpM7dBND+e8Ml5WVCo0KNDr1dTAUY/Qzmo7/FXbvhQe7SfDbRQFABnxARmJBkx9MnOUcmVbYLAMTsMaVBGSD+L1pU9vYWkqRleG5jNlDpMaSGHZwwgnrkyI2j6VmtONsTRznVi5w9y5a92xS44KssBQCQSAY3+nX5DEEAhl+ElfOZj57VrRHKgaUE1TvIe1HHbUoLRsSsAAb9arM46sp+5I9KaQuQAdarOKM8TonYR9Kq3uGU/DmrTJeQaGinusialfhW6UxVIkMDVAvRFbOa44pp3p52pi8CQ4ruremoaRFA7wSDamNXWNN60kNvAwrXKnZcVERTTIaobSrtKmB9jiu00U4UyDtKlSoAVKlSoAVKlXCaABXtHzZeG4d7rEYHhHdjhQPnXzjzPinu3nd2LMxJJ3M+Xl/at5/ilzw3L4sK0pbyYONZ8vL1rzHiL7aoMz0mf71i3cjWKpWSu2kyRjrO/79ansur7fv6VGbOPHCeTfF/sGR849ar2rBLf5cn1gYG5JJgfM0cSkw8/C3CmAAuPFrUHcYztirnKLId/c3IyYB1qSR/p6dBVSxbRgBpTUo8Rd28IiJ0kfYirfBhVdSoTWI0siMokdjO0Vk02qNYtLJR4ngLvB3xbeQDlGEEMoMwfMDoaKcE9y65S3NxmE6VUnB6kqIUHzitL7T3rV3gWW4ALi5tOD4lfAAyPhYEg+Uda0XsFwFqzw6KuouQC7GJZtIxj4QNo9d96bgpU2JdXimqB/Bck/h0Vry5dQrgAsQSdIkgbRE4iacOFW6gKaSFypB1ajPl30z9RmrvtBqe7MK7KNKKlz3bww8epHOl4EGM1H7N8vCKxR7gX8SXbcNK4LDQZgkE7fi+VQlToTdqwWCwJQ2tQJEnxqSQDGkRhcnHmcQcMTnN6zxKhyq2GEARAXt5L13itBxLpMBvEcgqwMxvBYDP8oE/agXtHcT3R1kAz+NT4iRHhUkQdpgGm7slNMJc+4y25RBDAkM2T8IyPhP6mvPeJuI1x2yAXaVOldzgCBHqWNX7FpgACY1GAAWGreNJAGOnUUGvcOVY6gTnMsTOfxZ79KqLCSJ+LZIgE5BkREAbRuI8wazV1gr4NEeK4oqukHwSSV79P31odbTW89Y26CO3cVaJZJw3Cl2np01dfrVh7QnSIYmcrmPlUwK/C7T64A9COm9TcNZRfEhEmZJ2PfoPShsdFROG0ruczuOo+XpVWdTaWAI8+nnPSrl7hLj5EaRnJjzwN6lv2SiSVz5DJkY9KVgBeP5aUGsZUmNxg9jQ8Uf4YMxOsEjsQZEdhVLjLSM0KII8oBq1LwyWgatOUbV02GzimzBzVAhPUYNPYE5plNCeyZWxUTmuimGhITOTSpUqYj7HVqdNVg+KcLlUQTg0pqH3ld95QMmmkDUHvKdrpAS1BxdwKjMSAACSTsABT9dCPaa8w4e5oaG0Nn5UPCA8E45xd4m66k6Wdssek7z13G8ASJNVOJAUQnxZGoEyf/YQfkIH+rem8y1tDidOPCJ/+pGT6+e1N4Ihm0hox4pEQo3JaIrBe0b/GUOB4RmaIgTG0yd4VcBjAJ6ADJIFXbvHhBotfF+bdRHXVjW380BR+EfiqXmCahpt4WI82G8HG2Nup3GAFF2QUGv8AEfgHaDBePI4HnJ/DWiaZDTRcF0WfCpm63xMc6O4E/i3kn03miXAcYj/GWmdwY+/U1m/dk5G/7/4qa3ZcQczn+5+1TJJlJ0elf+G4e8gkkEkAAtJEnBE/L71peUctvcMsI4dI+C5IPwx4XH0615fwPMbyNJ/DGO0Ax+k/Ki3Ge2PENBjSFOBjKwCpJG24E+VJfRP4eg3Wdm1XI0xJRvE3hByhGQ21SW+apoK2xJiQXLadpnSTq0+mR2ryriPaS8zA9NROZmMbgGJEH/marpzW650yN5XAaGJ6TiDAHljoIqazY86N9xKOzHVcCTsuoQ2JhWjSx3OQCcCDJkRxt4WgVfxMBMjUWXpra2fh2IMMAIzNC+AuXWXTcbE56ZMYPn5nPeTkEU4dQoW4xZF+AyPeW9sIxOVwMSYiJHxEbTHTRzgbRLe8KyoEgIcDtIjfbp9aoPZLMwIAgTtpnwzt59o69KNcCpuEJbI0A6tY2PQ+HTqDTgrHcEdaH8RcOsgnSSSVn4Tk5BPwGOkx6VMdjejH8yaCO0zn9O5ipOWlVQlupO25AM47CpefpkgrpgzGcT69P71T5YyswDfDI9SenyrR6IWwsqE5RUUdWOwAMgSf+6tcIlvOp+nVWiRvAiIx1qvxfFOgwVQSN8uBE+gO5ricVfWCrOZAJAEArkCAOkiPM1BQRdbwHhtoyx8SkDUPQUO4m5fOfdkHGBpwBtg+tXV5jcQf53DsZE6lw4WMTGPnHeu/xWtR7py8Z07OvfA6UIbBCXHHiYEneJPzxTFvBz8OnfBg/rtU/wDFOjSVmJMRBGeqnMU60Eub4OwA3B9D0piKr8MHkrEjcDHrVROHRvCcHudqJMoDYMAwGnvsDVDikhgdjTQijxHDlTB+VVvd0etrrtkER2JG3z7UHdYMGqTCiA1EalemqJq0Q0N0GlUtKix8T6ua9imteoY3E7CmvxMGlyJUQn76nLd86GHiq4OKo5D4hdb9OF6g38TT04qhSDgFxc61Fx/itOJiVbO0Y3npVL+Iof7Q8aq2HLMQNDdOsYApuWBUeN2OKdWZW8aBiPDrbqei/vypcx4O3oOhlCs3jIafH+U+S/SflVe1YM6wQCPhOqP9RxnA28/SrpuXLOSovWmwwBgZ6NECexIrLWjUE8PrtnQ+oSfiOwUTJJzIAk47GrFy2l7xA6WyoEbkCFAOqGPTESelW04dCC/DOQrYa3cllX8TAwPQTvDGqB5aWcADSc+HVCFj0DidJkRDAbU00xU0dtcIwIjBjeDJ6mBk9un0qRLrKPgAydgDAxO5iSMd/PY0m4h0Gh0YFYiZBGkxBkSwicz09Kn1pqJVhHZh6lQTtEKR+tJ2PBUTiWLEskCcQADmAfhxEHoAKnGpzgHvJg9BEHaSfLtHm88UqsVxkDMYIx8PSID99was8Px9sqVSCQAPEBG8BjG5EnPcUOwVFV+FZmyCq7md8gEz+sVJ7tbYn1gSASQTBMjb+m9P4nnKBicQMQu0wQM7mAevfyFQWLLXyXfwg50jw6pmDvj5VLTSyUneiS9zAuxW3nVJ/lXuBOwnO4GcCjHK+A/E7B2/J0IG6neY7/8AAqjwqeLSgCgHcGDPeflvFHeWIARHiMzJgj6kH17VDl6Kr2EPckoyABbZQ+FY1KYnJnJHbqKBXLGi0RMqreGPEB5KxGBuPLYzWps2gyOF0ZXcGD5EmZHXNY66zozAsCD1AMhhg6uhPwif6TVR0ZvZV9omUhSy4Kdsgj8rRv8AbyrMcBdVG1K0EZhhEHpBEg+uPStHzO6psp+ZSw3JMR+Jeg7EVj9Pijuf61rHKol4dmwayiIlx3UtAJBgyzdTPr/803ifaRASUSTnxSRjpAG3p51BxHK2d11NKlQwEwZ2VT8gJ9asvyG2o8UxIPSCWz8Q6Y6dqz/HyX+XgqcN7UaWGDHmdUYiATtRa1cs3gHTwOoEssB574G3eg3GezPVGmdhHzweu9Cra3bDTpP6j506i/1Fcls03EOpOlzLg+EwMgdz/cUPv2JOpCQ2MDHzFWV4pbyA4DAbQSB5CZwd/LPeuKzfFAJXDg7xsCM/vFCwNjfeSst1jzg9+4mq3NF0xjJgA98edS3AMkA6WnVp6R3XvVPiX8SDJG47/fahElmyzKACAdt/PpVLnTA6SBEYP/FTO4KagcdQf1EVWv3NagMOmG/v51SWQbBZbfzpimnMOlRGtEQ2TUqi1UqKDkfQ9u5Jkmo+I4jOM0LW+RimPfPeuSUzpjAIfxp2NdXjIxNBLvE5imNdM1nzZfBB/wDjo9DVheKNZlL0iDVlOJOAaamxOBo7XFTQD2z5mFslCSNeDHbr611OKzWa9rL4fSD9Y/6rWM7M5QozqvJI2GIWWEDoJH61Lw927aYPbdlx+ZH1DsRqkjy+1UvBsSc/L75ohwxZQVA8J8zme8GD8600QTPxdm6yOFfh7w/FbClGaSSYkMNs1Y9wxbUy2ryspl1DLqSQDqCGDB3k9vUVL1sxIGkjuJUx38x+aRE1LwlxXEMAlwEEFSYJI6rsfvjbqBL+DRYvFYCFQ6CQEclikiCEcrPl4sjvQrjuGQDFt0H4l3M5ycCcREedW/4ZrpJ1kNuBOoMVhTAOVMZjtFVeLS4MEtjDAmfCDA6euaSdMpq0N4e0j4MmFIGMwZkieuW3/pRS1yG26jTMnbYSWggb5nfH5vKgttGIJViTOV2YMNoIiZ7+dFOBQaA+t0YgmVIgGVX54Jpyb9kpIl4TlNtfEw8TTIwYIJMfSMxn0OY+I4iWKoPLHSen67VbRS3jc+DMmYk/lU7gYOemKVniOHjQqlG7sSZz+baazbd28miQ/l/BkrIIXfJzHQwBudu3f1tPYQNNy5qIkadS6dgQYH72qhxIIUjxQBkiQRPXGCMdNsUIuWk+JwWBmCDif5pnNONMmVnoPK+FQEFXkfh+EjuYgZx0gn1rP83cLf0MJJ8MkadhgECOmPrvXOR8WbTDQzsh8LKek5BUnxET6D+lfn3FTxKtpaBBzqyJIiB4dh2g9qtIhgbnIhTMAkgwDJA7jf55/Ws6GIYHeD8j5VqedIChdBCsScAAEE7xvG2Kyj71pDREjQHmL3H1rjYegjb56qvpxbwZcsoIk6TjJwPpWb5dcMwIH9fWt9ydE0qJGhipaRGQTKz06fQVlNKJrFtoBXOZov5tx9YmpzcTiFP5hvIEnG4H9aP8dwysArW0dNgoIUnYCT06bTvWX5lyj3dzUkqNwDuDtudxilFxehu1soKfcXBE6CMzgHuJzirZukLrUSBAkSJUnKnpH3qTiDqQB9zgz07sKpcIGTUnQiR5jYHyq9kaCF23qyvhMzM4adiQevSqXE3PGoYAY8895+lXrZYIpKkiIkZPpigfNLh1iCY8zJHfanFZE2V77lScYJOPXyqAHDekiiCcuZyPwjudz8qKWOVIu4JP0py6sYjj0pSM3bssx8KmrtjkV1t4UeZ/oK0lvhFmVUA/P+lTXH09ayfXf8TaPQX8jP8A/wCNH/8AaPoa5RX3x7mlS7s/Y+zD0aw3KbcvRVcbzPypl89zWLRaJXecin2rnQ1R1xXUfNKh2XGbNdV6gd64r0UMsPcjrQD2peSucASI/wCqKXrmaA+013woPXH0rTpfsZdT9QRwh1OACInM6oHrprS8vvgGLKA+ZEkxvmIA+1A+VcGCRq2OOsf81oOW8ztpNtUJecSAF65gZGPWa2m/RlFewhrLko9tO5KA6gYgEFdj0k0C51wegyhOmMiTqXP3yKvFWRi6sydGj8JwQfTGZ9aF82vsfGwz17ZHl0NZxbvBbWAfY4pg2oRI8yCQNgD02+eaJcXxYIDIBnIG0AQDHygfIVmjchszG4PUHuDUjXjuJEHbp8h3rdxMlIsPxZ1SJG3acGRPSRRLgZeGY6UXyIyeixtQJ7k70e4XgjcVAuFCgt5zkz8z17VM8IccsMXHcoXTAwFUMcjaWz+8/MMVuA+MAZ7agfIiP60c5c7sx0kSDpGBpXT5eo3p9/iSb2gqoOmTGJgxvWCk1ijVxT8kHB3RAmIAxuyjy8WUntMY6VVt2ove6YDRdwv8rjdQPrA+VEL94hkBEapGZ3iZkZ2mo+e2z7sdwVZGEyIOYx6GnGWf7FKOChdttYLalwh0GQCV1YGI2OIx5d67wv8AnlSCZAzv0Mnr50W464tyyNbqj+7KMBDBxvtPQjr3NBOU3ihJ0AeELq3YmWJJ7DIEZ+HrVyf442TGFyzotcdcsrbII1aJ8OQZPnOd6h4XlXDuhZ10McgTiInwkHG/UV17Wo+EkHecSD36jAqxa4AaVURCiM7jGajmorbNV023pUV+F9n7amUct5EgHzyPKauwyLCopxG5PSPLt5VNa4NEmInyxn161Z92s7A9sx89qzfWveTRdAr2+MafHGIiQDpP8pHSYqjxKM7liZOmBv2G5PQUa0Lgxn707Sv5du/3/c1K61aRfYXlme4jgdaBZgjEjPy/faorXKiDlpMRtn9a1iW0MDR1wdvrUx4VDGB5QaO+0LsRMpd4VzhXVQRtDCJ6ioOD5DDFi6MSfP8AWK154BDgH/n1qvc5ew2giP36U++2qsXYindAxOWuNhP+kqf0NcfhWX4wR6gj7Gp7koSCCCB0kVJZ5q4HxalnZswPnQPRTdcYI+on7Gqr8Kx3M/X9IrSIlq5/K3mBA/v9qGcw4Qpttv8A2ntQmDQJ/g27r9R/elU38W/52/3N/elV5JpBHhuIDGTKjsIJPqxkAeQ+tFUNsCSFjuxmPMs1BLJCKXE4E752BGNqoNfd4uM09UX8Kjpjq3nUtXka9GnbibZ+FNXoAq/IkifUTUJNtjCxPYGSPOBNZM8WzMc4UkR3ORny8qspxdyAA8dgBCgDyHpT4MOSNC9j1+f99qZt2+1AGdzMt0B6+YMCaevD4Jn9j9mjj7Yv6C7cQB+EVnefeN0Izv8AKilrlRn4v129fnUv/ge7dCcHsfMU4tJ2TJNqgA9zSU0icQTOev8Ax+8VeS0B4z8SEMCOmZb6qatcd7MPjTcUYG4MbVH/AOJvlWQOg1bmGntWjafkySaLnMuNRAGOBcWQf5lxB9VI/wBtYriuZFlKjaSB/pmQPlJ+RrSv7OtCJdvFgDgKMDp1zUi8nt25hRI6mSc+ZoUoQ+sbhOfwzF3hSyLpUkwNgagW03UQRvkfsUZ5rxLeJVMBSAT1M9uwqjfUBVA6kVpGTrJDgrdeCuvAuROI3BJotyq+VAEwCDPoJpXhAocrwT2OI7SRNLk5IbjxyaDkTnUARlmJGT1/c0d4Xlye/YNliit1kDIGfrQ32YQNxEEfCpI+orWcpy149n0j0AkfeawlJpsuKwAfaLhTqsC2PGWj6DJ88TVX2q5jBS1gEDMfT5Cl7U8za3fsld1LHO20UCLm4zXLh1Mc+UdvvVRWE2G5NImtKW3Ppv8ASr1nhwevlNV+G6CpVub9qiTZvFFkXsYG32ikeL2BI3ziO9DmvHama84++amh2FG4oAxHz337VNZ4vs3/AAe1BHuEmZNPIiM9P3+tDghqYaucVIxg4qQXDG2POgy3CZ7/AL/pVi3cYwJxE/So4lWG0uCAS3XIA+kmpGYDMnvgk48+goQl4yew6frUtq/Mz1H079d6niOwlw90nYk+R/T1q8rnwyN/3n99KB2bxVe43qcX5XWJEGImfp9KhosKX7AaQ0ExE/cDzrL83slBrOAPuZxH9qOWeJgGRMEEdxnofl96Bc9vC77pCI8RJPfSAQPvWvSvl8Mepoq8NcuMAWfR20xI+Zq2vOLoUoSHWfxiG6x4hjr1FR+6iRPb9P8AuqlwgQQNxEfMx+taKVsfbSRb/wDIW+z/AO1f70qG6qVVRNH/2Q==',
    titulo: 'Gato',
    texto: 'O gato (Felis silvestris catus), também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos'
}

//Criando array de posts para inserção
let posts = [
    {
        foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
        titulo:'O tigre',
        texto:'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        foto: 'https://vejasp.abril.com.br/wp-content/uploads/2021/12/20211202-Tigre-de-bengala9-foto-Paulo-Gil-2.jpg-1.jpg',
        titulo: 'O tigre versão Shine',
        texto:'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    }
]
// Inserindo novo post 
let containerElement = document.querySelector('.container')
containerElement.innerHTML += `
<div class="item">
      <img src="${novoPost.foto}">
      <h2>${novoPost.titulo}</h2>
      <p>
        ${novoPost.texto}
      </p>
</div>
`
//Inserindo vários posts
console.log(posts)
let containerElement1 = document.querySelector('.container')
for(let post of posts){
    containerElement.innerHTML += `
        <div class="item">
            <img src="${post.foto}">
            <h2>${post.titulo}</h2>
            <p>
                ${post.texto}
            </p>
        </div>`

}


