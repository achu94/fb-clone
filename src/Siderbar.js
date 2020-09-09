import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Siderbar() {
    return (
        <div className="sidebar">
           <SidebarRow 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwkKCA
                sJCQkLCwsICBYJCAgICBsICQoNIB0iIiAdHx8kKDQsJCYxJx8fLTEtMTU3Ojo6IyszODM4
                NzQ5OjcBCgoKDg0ODxAQDysZFRk3LTcrLSsrKy0rKysrNy0rLSsrKy0rLS03Nys3LSstKz
                ctKystLTcrNystKystNysrK//AABEIALgAuAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAA
                AAAAAAAEAAIDBQYBBwj/xAA9EAABAwIEBAQCCAUEAgMAAAABAgMRAAQFEiExE0FRYQYicY
                EykRQjQlKhscHwJFNi0eEVM0PxB5JjcoL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG
                /8QAJxEAAgIBAwQCAwADAAAAAAAAAAECEQMSITEEQVFhE4EiMnEVkbH/2gAMAwEAAhEDEQ
                A/APMrm5KlQT+NK0SFvJBO6oB6UK4kk+u0VPh1s6p5JTPlIIBG9c9pKL3ozJXRtX8AQq0l
                HxFAOYmTXMA8KreQVuAqEwgTAntU9tfrbaCHNRABE1qfD+KWwbyZgkjYda4OfqM2OEtO5q
                jGLavYyd14MUl3MkAQZykcu9H21im0b+sWG40GsEnsK0PiLGm7W0cfSnMsIKUaAgHlPaT+
                VeT4njr71wUoKlkiFgaqIOv95PcbRFa+ghk6mKlkdJEtCXBqnhh6pcceK0kkICFBtKz6+p
                1jQbTVe9e2KnCllpB4YAWpKi2y3J5nnroOZOwrNm0xa7UCG3Mh0bDYlLaP8f3NH2uAYlAb
                bZUnUkKj4J0Mf1dT7DTftQxwxqkiWn0FP39mlWjKFEH7ayAPXprMbk8hGtQquGbr6tDjZB
                IC8kNNj0MEyO+/Ou3PhrGVoLeQpQIAAQJA21MdNKgtPDl5bqzqZDi0ahS0QE+mv5CpvT4H
                8frY5cYMhsA/SACoEpSqCT6DT8qr1tFG+0wFDUH361bIauApXGSriboWgS0kjbT5a6ehqr
                ulhP1gAbJORxKSC2v1EfI6jXeag4p8FcsX0APKzGBzpzTH/fWk42AvQ5kqGZCgIBH7mimh
                EdhUJOtimuTrLOXU/hREDkPcCml0ZPbSaksnWyfNyPOqJXu6IHSITrUZUgI33E60ehlD7o
                QNAZ1FLFcLDDWadz86rjJWky2CregW0cSU8tNCIpmfeOZMelctcuWuuLSn3qT5ewpStrtQ
                OZKvQ1YJISmegmKgt4UfWpLlBjTmIpSdtLgaaBru4zCPypU23tVuOQATHLpXKsTjHYXJC2
                4lK9eegJ5GtFgqWyUrMEhW07is4pKVK96tcMPDWJMCNPWoZ1cdnTIwLfGSSn6tJEaztpUX
                h64Wm5TxVaBQBCjpVyythxuHCJI5kSaGThudZWgRJkRyrnfItMoSVFlbruN8dXoWltlC5g
                5FNoGuu+nPSI+RpvhHwg2+2Ly7RKSSpppX2xyJPPtQi7B13GGrdZPmQGyomSg9jO0Tr1Fe
                lWCkNt8NKYShQShIEAJED8gK63SQWPFFJ7M0YlduhWuGMNpCUtpSEiAEiB8qsG7RsagdOZ
                g0kLTv+PepkOAj1O9aS+qOcFMbbjeh3cPaXukamZA1FGE0zKrrz1ml9AUF9gLZMpjUyYAk
                T03rKYx4TD61cIBClA7iWyrlI5SQQeWvavRXhCSDzECql5UOe4CpqD2aJabTPI14SWwpsk
                5myQEGBCuenOeR5UIowCk6RIIO4IrXeJGct6txIAzLAPKZrJXCYcUnoo0ZFwzBkjTYG44Z
                jrpRdpaKjOnmZMimt2+dwCNzV80z9WAERpBI6Vny5VFJeStIq2XHGnc2pIOoGtTYjfuPIC
                VTCdwd60WFYO2tsuLG6iADvVdjeG8NSsidAJJA5VmjnhKdVuiyn9AVlYZmc87iQOdBvMyY
                6GK0GEtKVa5u0AelVXDIfUlQ+0ZB5VZr3e/BGceAFtfDMd6LQ9nGo5UR/pqnDKRoTvTl2X
                CExPIwNjSc4v8ApXpZyzeS0uYGuhJ3FKr7A8FbdZU643mUTCUq1AEchSqtzj5JJSMRw9Z9
                6nZdgx3G/Km26ZR6dKcppUyBv0rVJ3aYkixaVzzbaiDVzh+K8PyL1BEA9DWYYWsGFA6mNR
                tRC1FOs7baaVmyYVLZkkzRt3bZxdpwaygBJjed/wBa2DBhW250HWvO8F+sv7dTnMhsDtP+
                a3Tz5QryRI0BUdAf3tW+EajFdkbcHDL5lSUjz6SdZIgetTIuWFaNuIMbhKwf1rDX6EujNd
                36hoSEIkgjvrVWzinBXls5WAdSUEkjn16dKs1V2LqPTlXSE6AbmSQKr8R8QsWo+Ba1HXIh
                ImosGWLi3Di5Co846cwPlHzrIeIGbxTynG8xQCAhKRKu0DrymdOdLVwPTyaJHiJy4Vlbs3
                Y0la4IHuCK4u6zq1SQTrlIiskn/W0OIaZZS4ypIJeNypBQTuDqNuw13qzwxWJcSLi3UUgw
                F8VK1JPfafkKUgRL4mtkuW3ESNU7kbxy/Ksnh3hy+xJx1y2QnI2oBS3CUAr3jnW6xJnMw8
                iI+rkA7g1P4SxFnCl21i61nTeP8Vx0oIDZVsAZ9OXaZoe8V5KMuJyexlvDPgi+urh4XKVM
                JtF8My2Vla99D8vnV87gZs3xbuiYGcLiAscjH517M2w2lPlSPMZMDesD48Qn6YFJIGVgAR
                WLq8P4p3uZkkjOOsJS39XoSZSE1WYxaKTbqcWDITqd5pjeLEPhKjISqCSau8WdbcsFbaoJ
                AiufpUXG1uWRknfox2GXbaLYoOkAkGa5grX0q4UrLMrOpGhqrwu1duHVoEhAWYPatngdgi
                1IInyqEk860dRUU65YSjdeAm4wNwM5kNwQAUkCAe1VDdsorUh5OWDsRqYr1DD1NvMwYIIE
                aUDf4UzmzFA11CorFHM42qsloWxmsPtl5crJiBGgilV7apaZVGgI1rlYMnWSjJrSFLyeL4
                Y2VgDr+NaO2wlXDzRqRI02qt8MNpKoIkpO3evQsPYTwoiORka11ut6h45OiqMDz+4w1zi6
                AiDBgb0f/pq+EApG4kkjWa2xw5nPMTJmYqUWTSpGXcEAcqzrrJTqlwS+IxDGGPW6ra7KAG
                03IBIWCQmREj12JrQYg08pCuA3ncnyBX+2DsJ9N6gxGxSzfPuLClheHlLKM8AAawPw5VZY
                bcaoUftN54UdjGs16DC7hHezXHHo072mZc+GXXgfpiHrkrOYpQr6O0D3Mj9jQCri0wDhhC
                yw02GU5GG2xnUgb/F7mdq1YWzvoT0AqpxTEpdDLaZCSFuJRqctW9uSaQdhFuEpVl1BMSFa
                TUTjDRUUuJGi/MFolJB61SWvilTT62/ojjbQVlQ+6gBKiN9PnypzGJ4pdXC8jFvwHCQhxT
                pDqR1IA94/Gm1wNdy5TgGHuHOlvczDayB8po9nDrdhH1bYSI+KNaoXHX7EhziFbZjiQCcv
                t0qzbxHjMgpUCCmZB0Ipbb+RfZX4imFK6KBkDShiXOEhT6Uhdm8QspBylAGZMfLU89anuj
                mOvUj2rmNuNsYe84pfncTwznIlSzAEDsJAquXDDVWpmpt/Ez/CzltJzIC4CyAOdYvHsaXd
                FTjhhRkZQdhR9q8FWSD/APEPyrB3t0c6oJ0JisTUpUm7Rgl/0icfSHdTuoGBpWndu21WMg
                5vqzCZmsDcW9y64CnQE7jetKwytFnlWdQiSSdzVk+nVRfgUYPmi68JWDarZLkxxCVE99a1
                VjbtEKSY8qyIFZrw02WsPTJ1c8yTOoFPw+9uQ+7mUMqVkCay5cEp3T3Rqr9dja2ZQ04QjY
                7iiL1PGbOUxA0ArLJxHX4oJ5zRLGMq2OsGJGoNctQnGTbey5KnNborb61vEv8AlMpJ0IJk
                V2r9p1LpzZfWa7RLPBv9UQ0+zyrwYUfSlZ9wowDtNejcRpKBoNTEivNLNr6NcOQd1lQM/O
                tHY3ynRCFEkESnU11upwa29uSS/prGlBZjMPbeiSykJ0VsJms9avvhwwy4ZEkgGJ7VapXc
                GPql67jIax/A4cR2BTXkivrTipznXKTOb7mx196rLhCmFQCSAAApQgmNNR6ACr9CX41aX0
                jIYNBX2H5mlFKHMwGZCVEkd4EdPlW/pMzS0yi14Llk2SvgCD61I3I6kb0LYwhanXjk4kqK
                lmMqRMa+k/OibZQ0PcAiYmo8fwO1v2QHFuABJKQy5kMeldDuvBanfcZc41gyVZT/ABCgSC
                ltAc17cz7U9jH0pQFW2E3biCCUEN5AoActP1qosWk2ORsADhGEPKtw4pe8SZ6Eg6SRvVmv
                FnFtpZDqsokBCItwfUjuTzqz7HUn6RDeeInXLr6CMJuQ8qE5MyS02P6oPY/I1aW1l9HQrX
                41TkBgA84HSu4RbGc8ASNSEwD6fL8KJuD545AVCXKFx3sCv1cNlTn3W1K07Ca8wexC6uQj
                jvuucMAIDiyQj0Hv616bfKChk5FJChEyNqwHiPBnrJXGS2TbOmGbpshxhZ7KBOvvOm1Rkn
                tsZc17b7M29ioCwb13YBEntXnr1wStR1MLIMAmnJ8RvIt8muZCMgg+1WfhZpi4ZOaMx1IO
                86mnCGndqyCWql4AGcSbSYPM8+tWTl1xGNBynfQig8TwGLslE5YmBprQN68u0CWlH4tACK
                co3VMlJy44ouLfH1tM8FJBgEJk6ilh2KqUvJzWSSQTqaqm8OKk8f7wzVceHbFKnkuETCho
                KjOKjFtDU3snyaK1srlyFQcpEkxsKtLZDTYCVKGpkgjUGruzQ3wCI1yRHOvLfG+IXdvfgM
                SEqECJBCq5EcXyzkrqyDjTvk9Kbu2EjRYECDrvXa8tsmsffYDyYCSJSFqAKx2HOu0f49Lu
                iemXgJQyX15QNTE1qMCw3hkTuYgUPgWEKVfuMmfqyJjevQ7TAciBkEKI1UoSRXfWFcsySl
                fBFZM2zScy1JzRrJ0FHWV3au3IYStBUQVBAIkj0oV/wy48MpfWmdCpEAj0pmB+BrPD78Xq
                FurdAIK3XS4SKHGPZEkmX982001xFEJAgEnQV2xDLyMySlXcEHWiL2wauGSy4JSrcAxUVh
                hLFrIaTAUZIB0Bo0R8ErZhfF+Fiyvg40nKzeArSkaBDmmYR7gj1iqNm+bbcyrWATJBOs8j
                Xonjq2Q5hK1H47d1LrRA131/AmvKsTseMM7asjoSQCPhPqP170nBGjHPb+F5c2Fo83nLgT
                mBMpWAdOg2qjw60tGL0l19bupyNqgNoTyM+lZe+vL5leV5Cxw51SSQRtoR3iOelAJxd6AM
                qlQkhIE+Q7n9/KlXot1nq91jliy3DawSSUyNACO/5VU2WK/SuItI0DhTEQI1iPbWKxNlaX
                t2oKeJaaOpCgQojlA66Vr7BlLaA2hICR0G5qLBOyxt05ipSue3pVFh1y5a3jtusIdYce4d
                3ZPCWn2TvI9DoY0IBBrSMJ8nrppVBdWLlxj1pbpQCm4eSFqBIUlI1VrzEAn3p45flXkWSP
                4/wrvFf/jxyyuHDbOFVs8sqs1r1KRyQrvroeYE76VmMAfXaXWRUiFkEHSCK+lLm1beQpt1
                AWhxAC0K2P8A1yPKvDvG/g3EMPxFx63YeuLZxReZuWWS6WxzSsAHUHnsRqKvli/0zFHJT9
                o0aLVNy0FpAJcSIPSsP42w11opcP8AxrhXSO1XnhfHw3DLp1GhBOoPpRPi9KLy3hvmQpZ6
                xrWXRKM/RqlJTja5KNgqXZpCebYSD0O1abwphqmUgrVJCSTmGlZzD3WsvDP2QBE8/wBitj
                Z3rYaAAgkQYoyxelpLkhHdovrN5Ofh5oUNY6ivPv8AyWpDT7byRPEJSexFbC3ZLjgdSqNM
                u+9Z7xxhpdbBcj6s5hXPxR05FfJZKJVYV4ytUWaGnGHCtlAQMiZCx1pVrvCPhe2dswQ2iS
                AVKKRPalW+WNXwWRbr9gzwzck43deX7YSVcgRIr0tDyAmFaEDQGvOfAlxbuXV8pUfW3RWg
                nkK116tcoDShodecirHkMccexbC9SOntSN30j3qmlY571Gu7WjQIzEmAlIkk9hS+S+A0td
                jQIuuse1cdvkpTJO1Vtup9QBUgIkTlUqVe4G3zrq0FSwDBgkqjWB6etWwjOXakQbS72QY3
                xLu2eaBy8S2UhqRoFHr715wBnRsQoSlaTuhQ3n0II9u9eoKTqO+hHrWO8U2AtbgXSB9Vcr
                4b0CAh3kT6jQ9x3q3LDZNdieCe7T7mUfYKvblQwtBOjYmfiAAJ96vFtSJH40MtJSZ/Ssuo
                16UQW9kfic6aA1YNNAbDaN96hbfCoTB05kUYyP8AuoNk0ghA0nprB2FE+E7IP4q9ekeW1b
                Fu0T99XxR7AD3oG6e4bSuySSQOVanwmx9FwpLridShV68BBJKpOh7COdW4I3K/BV1Eqj7Z
                ocuvsB8qjcbnXYjYgkEVTL8V26VQq2e/+yVpJHqJom38RYe8codLajsl5BRr66j8a3b+Dn
                A+L4Nhl2f47DWHiTpcKQG3x0hSYP41TXPgbC3Gym3eumQdkl0XTY9iP1rYKKHESkhQO5SQ
                RFDFooOnPptT0xfK3GpNcOjyXFP/ABZiqHFPYbeWz4JnhOLNo5+X61A3gOMWKP4y1uElOp
                WlHFa9iJr2VIB9e2lPAUNj6gmq54k634JRm075PMMJeecTlbkwNgRINU3iJd4ohtbZ8yoB
                O8V7Iu1YcOZy3bJOhXkAV8x/egL7wvYXYCl8ZGQ5klt2AD3kGsM+klq1Lcu+a+1FR4MQ41
                ZISr7SQQTypUVcsvYXbLdSS8ywnOuEgPNo5yOem/SCY0pVmms6b/EtU4eTzTw6m+buAm0b
                cccc2aaSVqVz29jrXpOGsYstIL9uloxqLh8cT/1FT+F8Ibw519kP8TjFKglTXCIiZ5nqI5
                VfvNpkaDbpEVvj0y21O2ZI5GuGV9vZOKMOvjTUpbQRPvP6Uai0Sj4BvuomVH3pBMbE6bCZ
                Hyrudzaf/UQa0RxRjwgc3LlkbyCgeupA5ClapHmUBuQkmP31p2Yc+e8iobu6Fuz5EhSoJA
                J0B71b29kDl/ds2rXFdOgMJQnVxZ7D9xQ60MYthhzJ8r7ZQ62FBxTZ137iARVCtq8uXi69
                JkwJEADsOlGMWzjXmbKkKEedCiD+H60nG1yNNp2ZdtDrDy7O4/3bdWQqGzieSh2Oh+Y5U5
                1rN7b6Vrpt3lfx9shzQAPpaHEHr06yD7VG9gDDySrD3wrLqWXXAsD0P9x71jngaut0bYZ0
                6vZmQTbxqkbk6AUS2mN+W86CjXrdbCy282UKTqUrEGOx6dxp3q2wa0YZQL27iVa2rJGckf
                ej5xy51XHG26LZZFFXyVCMCurtEqTwWCBndeBBUn+kdxz0A3rQ3bwU3wGdGwIUU/b2H4QK
                keu3bjypRkbMAlWrih36fuTTmrXtW3HjUF7Zhnkc/orE4UlzVQ31kipBgDX+QauktRTwg1
                ZZUC2VhwdAokdztR4Gmv40yDXSTSGcKcutOH51zOI1+cUzidOuxoES1Ko5UATqRqKgSrMQ
                NNSBB51JcqI5ahMgAyJpPsMY4AoQeY1BpVGCY/OlTAa81Jzp+JJlKo1BqYuhxKVbEghQ6E
                b1DxIOux0UByBrj5yoBHUnMNJNOuBE5MfLao1KoPjK/wA1zOs7TRQBZdjc+1RLfQd0g+oB
                qHKs+9d+jKO59jTASrhv7g9tKjN019w94JqZNonnUgYbH2Z9RRsMD+lM/wAtXymkVWyiFZ
                HELT8DraShxHof027UelCRyHypqloGwk8tIFAEa0Ju2Upc+t4S5C37fzA8um/P8acrD0gB
                SiSSrdWpI70XZHzSftIJAjY1LdhQTmTyOoIqvuO2BJay+3anajYc+lL6QB8aNulSJeZVzi
                eRqf0IYHCOXvXRcDmKlCUHYjsKRa/pnuKAGJuW+setSBSFbEeoNRltrmkjvFN+itnVCo6Q
                aQEpaB9qbwwPaoyl9v4VZwN0q3+dPbuErOUjKoboVufQ0AdaSniDTaTAG9K7Pm3iSARzNS
                MqTn22BJ7VHcjWeixrS7h2GfqOVKuTSqVCBQ53257+oIohcKaT7QAdBQBSsHzIKfXUfOiC
                v6lPqBTfYB6Uop3k/YqEKHX0p6Sjmoe5ooCXOB/gUs5pnFaG6hpzGtdFyz1/CkMcFUif8U
                kvsfeFOBaVssfOgCMif7VzKKkLXQ/I0xSSKBBNsRKNd5TE9Zoh0+QjTQTQDagkJUdMqxuK
                PXsfQiovlDAVJBqJTAO3samroQf+6kAGWVp+FR9jXQq4T8Kj2o0hI3PLka4Cn9igAYXV2N
                20r7FMUvpR+3bLH9TZmPaip7U2aPoCFu9TslyZ/wCN8FtXsaT6kLTtBT5tocR3B6elPWEk
                QUg9iAaHW02PgJbgyExnbJ9P7GigJrW5kkL+JCYJGyhuCPaoVO/xZGb40EgEmNNoHoaqr9
                82pz7BYLaClUtzy19duY1G2tK3uc92yQrMFIUAQZEcqdCL1syfSlTc4CCvoCdetKkBWl+/
                R8UOJG5WmDHtTw7LIzCCVDypk96rHL1/m6Rpska1G7eEhAzHcAqABPsKnQF221mEmEg81K
                AJqTgs/adR1jiCqxtplWqkFRIBKlqJJ/GikWrH8tI7kUhhqUWo/wCRGncU4It9w4j3IoZN
                qz/LHrFSi2Z/lp07UgJ+CyrYtn0IppsmztHqhdM+itfcHtNL6I3yBHcKIo+wHfRXE/7biu
                wJkUgbhPxN5u6RBrn0U/ZWsdgomnC2c5vLHWDQA5p0GUKSU5hoFpI1oyfL5uQgCYJNAho5
                x9c6qDMBcDSjrclaJcAlJIygQD0ke9Ql2BASlkH420QSPi4hpDId3FKneAQKJcjOdUpnYL
                bj8a5lc5FJ7oimmBEAnkk+pFPA/Zrvm58uREGlNACpqirkEf8A6n9KdXDQBEsufym1T910
                oP5Gh3FKG7LyeZKCHwPaZ/CilRz9yBUK1J5OIkclGCfnTQFRiqUP2zrCteIggEoLbiVciA
                QJIMHflVL4aUs/RS78bdulDgII851299q1b6VFJBSSCDMHiJP51lsNOTEH2v5VwkAHodR+
                Z+VTQjV3K4aSjm4QCOcDWlQqiVOgfdBAFKlQjF3l+TOXRI0JBAJ96SLo52tYkEpPU9u3+a
                VKlfBM01vcthCVXFupMgRcW5JbUI51aW6rRY+qfHuZI+dKlTIhiWUH/kBnqZqVLHQiuUqi
                xnShSeXuKbnA3HvSpUIBpuQOXvFOS8lXPnoJpUqKAmajN6JJ0qdsQojqAaVKoMBlzEedMg
                6TG1CKYHxNqI6FJpUqa4AQW+n7QUOixr866Hvvtkf1IMilSqQD8yTsfY71wmuUqQDCVfZV
                HqJFDuFz7TTTgg6fAfnrXaVSQgJwtA6277J+80eImfY7e1Z10qbx1o5kKRdNhsLmHStKuY
                gciY35ilSpgjRSQuR0gGNudcpUqBH/2Q=="
                title="Achu Yakub" 
            />

           <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />

            <SidebarRow 
                Icon={EmojiFlagsIcon}
                title="Pages" 
            />

            <SidebarRow 
                Icon={PeopleIcon}
                title="Friends" 
            />

            <SidebarRow 
                Icon={ChatIcon}
                title="Messenger" 
            />

            <SidebarRow 
                Icon={StorefrontIcon}
                title="Marketplace" 
            />

            <SidebarRow 
                Icon={VideoLibraryIcon}
                title="Videos" 
            />

            <SidebarRow 
                Icon={ExpandMoreOutlined}
                title="Marktplace" 
            />
        </div>
    )
}

export default Siderbar
