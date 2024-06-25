import { IconCloudDemo } from "./cloud";
import { CardHoverEffectDemo } from "./demoskills";
import { Dock, DockIcon } from "./ui/dock";
import React from "react";
import LetterPullup from "./ui/letter-pullup";
import GradualSpacing from "./ui/gradual-spacing";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
    return (
        <div className="mt-[4rem] max-md:px-5" id="skills">

            <GradualSpacing
                className="font-display text-center md:mb-10 text-2xl md:text-6xl font-bold tracking-[-0.1em] text-white"
                text="Check Out My Skills !!"
            />


            <div className="hidden max-sm:block">
                <IconCloudDemo />
            </div>

            <div className="flex flex-row mx-4 justify-center items-center gap-[5rem] max-sm:flex-col max-sm:gap-1">


                <div className="glass-effect px-10 py-10 my-5 max-sm:w-full rounded-[3rem]">
                    <DockSection title="BackEnd">
                        <Dock>
                            <DockIcon>
                                <Icons.nodejs className="h-6 w-6" />
                            </DockIcon>
                            <DockIcon>
                                <Icons.django className="h-6 w-6" />
                            </DockIcon>

                        </Dock>
                    </DockSection>
                    <h3 className="text-center mt-6 text-base">NODE JS , DJANGO</h3>
                </div>


                <div className="glass-effect px-10 py-10 my-5 max-sm:w-full rounded-[3rem]">
                    <DockSection title="FrontEnd">
                        <Dock>
                            <DockIcon>
                                <Icons.react className="h-6 w-6" />
                            </DockIcon>
                            <DockIcon>
                                <Icons.nextjs className="h-6 w-6" />
                            </DockIcon>
                            <DockIcon>
                                <Icons.tailwind className="h-6 w-6" />
                            </DockIcon>
                            <DockIcon>
                                <Icons.gsap className="h-6 w-6" />
                            </DockIcon>
                            <DockIcon>
                                <Icons.bootstrap className="h-6 w-6" />
                            </DockIcon>
                        </Dock>
                    </DockSection>
                    <div className="max-sm:px-2">
                        <h3 className="text-center mt-6 text-base">REACT JS , NEXT JS , TAILWIND , GSAP , BOOTSTRAP </h3>
                    </div>

                </div>

                <div className="glass-effect px-10 py-10 my-5 max-sm:w-full rounded-[3rem]">
                    <DockSection title="Databases">
                        <Dock>
                            <DockIcon>
                                <Icons.mysql className="h-6 w-6" />
                            </DockIcon>
                            <DockIcon>
                                <Icons.mango className="h-6 w-6" />
                            </DockIcon>
                        </Dock>
                    </DockSection>
                    <h3 className="text-center text-base mt-6">MySQL , MANGODB</h3>
                </div>

            </div>
            <div className="max-w-screen-lg mx-auto mt-10 max-sm:hidden">
                <CardHoverEffectDemo />
            </div>


            <footer className="sm:px-10 px-5">
                <div className="screen-max-width">
                    <div className="bg-neutral-700 my-5 h-[1px] w-full" />
                </div>
            </footer>
        </div>
    );
}

interface DockSectionProps {
    title: string;
    children: React.ReactNode;
}

function DockSection({ title, children }: DockSectionProps) {
    return (
        <>
            <div>
                <h2
                    className="font-display underline underline-offset-8 decoration-2 text-center text-xl  text-white ">{title}</h2>
                {children}
            </div>

        </>
    );
}


const Icons = {

    react: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="7" fill="#39c1d7"></circle><path fill="#1f212b" d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6	s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"></path><path fill="#39c1d7" d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729	c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399	c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50	s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975	c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399	c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729	C82.026,60.029,88.5,55.376,88.5,50z M63.369,18.791c0.725-0.193,1.397-0.291,2.016-0.291c0.86,0,1.616,0.188,2.257,0.563	c3.092,1.806,3.723,8.42,1.42,17.411c-3.173-0.714-6.635-1.251-10.314-1.583c-2.159-3.113-4.405-5.947-6.668-8.429	C56.098,22.435,60.04,19.683,63.369,18.791z M60.755,56.299c-1.179,2.066-2.42,4.045-3.693,5.939C54.802,62.407,52.446,62.5,50,62.5	s-4.802-0.093-7.061-0.262c-1.273-1.894-2.514-3.873-3.693-5.939c-1.219-2.136-2.313-4.24-3.293-6.298	c0.98-2.058,2.074-4.162,3.293-6.299c1.18-2.067,2.42-4.046,3.694-5.94C45.199,37.593,47.554,37.5,50,37.5s4.801,0.093,7.061,0.262	c1.273,1.894,2.514,3.874,3.694,5.94c1.219,2.136,2.313,4.24,3.293,6.299C63.068,52.059,61.974,54.163,60.755,56.299z M65.644,53.545c1.041,2.461,1.901,4.83,2.597,7.082c-2.275,0.507-4.731,0.93-7.354,1.243c0.842-1.326,1.672-2.682,2.473-4.085	C64.171,56.366,64.928,54.951,65.644,53.545z M50,71.357c-1.636-1.809-3.269-3.812-4.864-5.979C46.728,65.455,48.348,65.5,50,65.5	s3.272-0.045,4.864-0.122C53.269,67.544,51.636,69.547,50,71.357z M39.112,61.87c-2.622-0.313-5.079-0.736-7.354-1.243	c0.696-2.252,1.556-4.622,2.597-7.082c0.716,1.406,1.474,2.821,2.284,4.24C37.441,59.189,38.27,60.545,39.112,61.87z M34.356,46.456	c-1.041-2.461-1.902-4.831-2.597-7.084c2.275-0.507,4.732-0.93,7.355-1.243c-0.843,1.326-1.672,2.683-2.473,4.086	C35.829,43.635,35.072,45.05,34.356,46.456z M50,28.644c1.636,1.809,3.269,3.812,4.864,5.979C53.272,34.545,51.652,34.5,50,34.5	s-3.272,0.045-4.864,0.122C46.731,32.456,48.364,30.453,50,28.644z M63.36,42.216c-0.801-1.404-1.631-2.76-2.473-4.086	c2.623,0.313,5.079,0.736,7.355,1.243c-0.696,2.253-1.556,4.622-2.597,7.084C64.928,45.05,64.171,43.635,63.36,42.216z M32.358,19.063C33,18.688,33.754,18.5,34.615,18.5c0.618,0,1.292,0.098,2.016,0.291c3.329,0.892,7.271,3.643,11.289,7.67	c-2.263,2.482-4.509,5.317-6.668,8.429c-3.679,0.332-7.142,0.869-10.314,1.583C28.635,27.482,29.266,20.868,32.358,19.063z M14.5,50	c0-3.596,5.401-7.44,14.335-9.901c0.969,3.159,2.241,6.486,3.806,9.901c-1.565,3.415-2.837,6.742-3.806,9.901	C19.901,57.44,14.5,53.596,14.5,50z M36.631,81.209c-1.733,0.462-3.17,0.371-4.273-0.271c-3.092-1.806-3.722-8.42-1.42-17.411	c3.172,0.714,6.635,1.251,10.313,1.583c2.159,3.113,4.405,5.947,6.668,8.43C43.902,77.566,39.96,80.317,36.631,81.209z M67.642,80.938c-1.103,0.644-2.539,0.734-4.273,0.271c-3.329-0.892-7.271-3.643-11.289-7.67c2.263-2.482,4.509-5.317,6.668-8.43	c3.679-0.332,7.141-0.869,10.313-1.583C71.365,72.518,70.734,79.132,67.642,80.938z M71.165,59.901	c-0.969-3.159-2.241-6.486-3.806-9.901c1.565-3.415,2.837-6.743,3.806-9.901C80.099,42.56,85.5,46.404,85.5,50	S80.099,57.44,71.165,59.901z"></path><path fill="#1f212b" d="M34.595,85.002c-1.471,0-2.817-0.351-4.001-1.043c-4.632-2.705-5.783-10.276-3.178-20.811	C16.975,60.179,11,55.4,11,50s5.975-10.179,16.415-13.148c-2.604-10.535-1.453-18.106,3.179-20.811	c1.938-1.134,4.273-1.346,6.943-0.63c3.718,0.996,8.02,3.82,12.463,8.179c4.444-4.359,8.746-7.183,12.463-8.179	c2.669-0.714,5.005-0.502,6.944,0.63c4.631,2.705,5.782,10.276,3.178,20.811C83.025,39.821,89,44.6,89,50	s-5.975,10.179-16.415,13.148c2.604,10.535,1.454,18.105-3.178,20.811c-1.927,1.125-4.286,1.342-6.943,0.63	c-3.719-0.996-8.021-3.82-12.464-8.178c-4.443,4.358-8.745,7.183-12.463,8.178c-1.023,0.274-2.011,0.413-2.936,0.413	C34.599,85.002,34.597,85.002,34.595,85.002z M34.604,15.999c-1.301,0-2.474,0.302-3.507,0.906	c-4.224,2.467-5.194,10.008-2.595,20.173c0.067,0.264-0.089,0.534-0.352,0.606C18.038,40.472,12,45.077,12,50	s6.038,9.528,16.151,12.316c0.263,0.072,0.419,0.342,0.352,0.606c-2.6,10.165-1.63,17.707,2.594,20.173	c1.03,0.601,2.207,0.906,3.498,0.906c0.002,0,0.004,0,0.006,0c0.838,0,1.738-0.127,2.677-0.378c3.647-0.977,7.925-3.836,12.369-8.27	c0.195-0.194,0.511-0.194,0.706,0c4.444,4.433,8.722,7.292,12.369,8.27c2.394,0.639,4.485,0.461,6.181-0.528	c4.224-2.467,5.194-10.008,2.594-20.173c-0.067-0.264,0.089-0.534,0.352-0.606C81.962,59.528,88,54.923,88,50	s-6.038-9.528-16.151-12.316c-0.263-0.072-0.419-0.342-0.352-0.606c2.599-10.165,1.629-17.707-2.595-20.173	c-1.699-0.993-3.779-1.17-6.181-0.528c-3.647,0.977-7.924,3.836-12.369,8.27c-0.195,0.194-0.511,0.194-0.706,0	c-4.445-4.434-8.722-7.293-12.369-8.27C36.336,16.125,35.444,15.999,34.604,15.999z M65.386,81.999	c-0.663,0-1.379-0.102-2.146-0.307c-3.331-0.893-7.312-3.589-11.514-7.8c-0.188-0.189-0.195-0.493-0.016-0.69	c2.265-2.484,4.494-5.303,6.627-8.378c0.084-0.122,0.218-0.2,0.366-0.213c3.612-0.326,7.06-0.855,10.249-1.573	c0.261-0.059,0.527,0.101,0.594,0.364c2.336,9.123,1.703,16.008-1.652,17.967l0,0C67.175,81.789,66.336,81.999,65.386,81.999z M52.771,73.521c3.951,3.894,7.653,6.381,10.727,7.205c1.599,0.427,2.909,0.353,3.892-0.22l0,0	c2.855-1.668,3.357-8.073,1.306-16.387c-3.028,0.659-6.277,1.152-9.67,1.467C57.01,68.478,54.908,71.144,52.771,73.521z M34.614,81.999c-0.95,0-1.789-0.21-2.508-0.629c-3.355-1.96-3.989-8.845-1.652-17.968c0.067-0.262,0.333-0.419,0.594-0.364	c3.188,0.718,6.636,1.247,10.249,1.573c0.147,0.013,0.282,0.091,0.366,0.213c2.133,3.075,4.362,5.894,6.627,8.378	c0.18,0.197,0.173,0.501-0.016,0.69c-4.202,4.21-8.183,6.907-11.513,7.8h0C35.993,81.896,35.276,81.999,34.614,81.999z M31.304,64.119c-2.051,8.313-1.549,14.719,1.306,16.387c0.982,0.572,2.292,0.647,3.892,0.22l0,0	c3.074-0.824,6.776-3.312,10.727-7.205c-2.136-2.377-4.238-5.043-6.254-7.935C37.582,65.271,34.332,64.778,31.304,64.119z M50,71.856c-0.141,0-0.276-0.06-0.371-0.165c-1.663-1.839-3.31-3.864-4.896-6.018c-0.114-0.155-0.129-0.363-0.038-0.533	c0.091-0.17,0.261-0.274,0.465-0.263c3.306,0.161,6.374,0.161,9.68,0c0.2-0.012,0.374,0.093,0.465,0.263	c0.091,0.17,0.077,0.377-0.038,0.533c-1.586,2.153-3.233,4.178-4.896,6.018C50.276,71.796,50.141,71.856,50,71.856z M46.167,65.924	c1.251,1.655,2.537,3.226,3.833,4.684c1.297-1.458,2.582-3.028,3.833-4.684C51.221,66.024,48.779,66.024,46.167,65.924z M50,63	c-2.369,0-4.757-0.088-7.099-0.263c-0.153-0.011-0.292-0.092-0.378-0.22c-1.337-1.989-2.586-3.998-3.712-5.97	c-1.18-2.068-2.294-4.198-3.31-6.332c-0.065-0.136-0.065-0.294,0-0.43c1.016-2.134,2.13-4.264,3.31-6.332	c1.125-1.97,2.374-3.979,3.713-5.971c0.085-0.127,0.225-0.208,0.378-0.22c4.684-0.35,9.513-0.35,14.196,0	c0.153,0.011,0.292,0.092,0.378,0.22c1.339,1.992,2.588,4.001,3.713,5.971c1.18,2.068,2.294,4.198,3.31,6.332	c0.065,0.136,0.065,0.294,0,0.43c-1.016,2.134-2.13,4.264-3.31,6.332l0,0c-1.126,1.972-2.375,3.981-3.712,5.97	c-0.085,0.127-0.225,0.208-0.378,0.22C54.757,62.912,52.369,63,50,63z M43.218,61.757c4.479,0.322,9.085,0.322,13.563,0	c1.273-1.903,2.463-3.822,3.539-5.707c1.128-1.977,2.195-4.011,3.173-6.05c-0.978-2.039-2.045-4.074-3.173-6.05	c-1.075-1.883-2.265-3.802-3.54-5.708c-4.479-0.322-9.084-0.322-13.563,0c-1.274,1.906-2.465,3.825-3.54,5.708	c-1.128,1.977-2.195,4.011-3.173,6.05c0.978,2.039,2.045,4.074,3.173,6.05C40.755,57.936,41.945,59.854,43.218,61.757z M60.888,62.371c-0.17,0-0.331-0.087-0.423-0.233c-0.103-0.164-0.102-0.372,0.001-0.535c0.928-1.461,1.733-2.791,2.46-4.065	c0.764-1.338,1.528-2.758,2.273-4.219c0.088-0.173,0.273-0.276,0.463-0.272c0.194,0.007,0.367,0.125,0.443,0.305	c1.015,2.399,1.894,4.798,2.614,7.129c0.042,0.133,0.025,0.278-0.045,0.398c-0.07,0.121-0.188,0.207-0.324,0.237	c-2.35,0.525-4.841,0.946-7.403,1.252C60.927,62.37,60.907,62.371,60.888,62.371z M65.596,54.731	c-0.594,1.138-1.198,2.245-1.801,3.302c-0.583,1.022-1.216,2.079-1.92,3.209c1.97-0.262,3.89-0.593,5.727-0.987	C67.025,58.441,66.353,56.59,65.596,54.731z M39.112,62.371c-0.02,0-0.04-0.001-0.06-0.003C36.491,62.061,34,61.64,31.65,61.115	c-0.136-0.03-0.253-0.116-0.324-0.237c-0.07-0.121-0.086-0.265-0.045-0.398c0.72-2.332,1.599-4.73,2.614-7.129	c0.076-0.179,0.249-0.298,0.443-0.305c0.182-0.019,0.375,0.099,0.463,0.272c0.745,1.461,1.509,2.881,2.273,4.219	c0.728,1.274,1.533,2.604,2.46,4.065c0.104,0.163,0.104,0.371,0.001,0.535C39.443,62.284,39.283,62.371,39.112,62.371z M32.399,60.255c1.837,0.394,3.757,0.725,5.727,0.987c-0.705-1.13-1.337-2.187-1.92-3.209c-0.604-1.057-1.207-2.165-1.801-3.302	C33.647,56.59,32.975,58.441,32.399,60.255z M71.165,60.401c-0.215,0-0.412-0.139-0.478-0.354c-0.975-3.179-2.248-6.489-3.782-9.838	c-0.061-0.132-0.061-0.285,0-0.417c1.534-3.349,2.807-6.66,3.783-9.84c0.08-0.259,0.354-0.404,0.611-0.335	C80.367,42.116,86,46.094,86,50s-5.634,7.884-14.703,10.383C71.253,60.395,71.208,60.401,71.165,60.401z M67.909,50	c1.436,3.155,2.643,6.277,3.589,9.288C79.717,56.945,85,53.322,85,50s-5.283-6.945-13.502-9.288	C70.551,43.724,69.344,46.846,67.909,50z M28.835,60.401c-0.044,0-0.088-0.006-0.133-0.018C19.634,57.884,14,53.906,14,50	s5.633-7.884,14.702-10.383c0.258-0.069,0.531,0.076,0.611,0.335c0.976,3.18,2.249,6.491,3.783,9.84	c0.061,0.132,0.061,0.284,0,0.417c-1.535,3.35-2.807,6.66-3.782,9.838C29.248,60.262,29.05,60.401,28.835,60.401z M28.502,40.712	C20.283,43.055,15,46.678,15,50s5.283,6.945,13.502,9.288c0.947-3.011,2.153-6.132,3.589-9.288	C30.656,46.846,29.449,43.724,28.502,40.712z M65.645,46.957c-0.188,0-0.36-0.105-0.446-0.273c-0.757-1.488-1.501-2.869-2.272-4.22	l0,0c-0.726-1.272-1.531-2.602-2.461-4.066c-0.104-0.163-0.104-0.371-0.001-0.535c0.103-0.163,0.287-0.253,0.483-0.23	c2.563,0.307,5.054,0.728,7.404,1.252c0.136,0.03,0.253,0.116,0.324,0.237c0.07,0.121,0.086,0.265,0.045,0.398	c-0.721,2.336-1.601,4.735-2.614,7.131c-0.076,0.179-0.249,0.298-0.443,0.305C65.656,46.957,65.65,46.957,65.645,46.957z M63.794,41.968c0.611,1.07,1.205,2.158,1.801,3.302c0.756-1.856,1.428-3.709,2.005-5.525c-1.837-0.394-3.757-0.725-5.728-0.987	C62.58,39.89,63.212,40.947,63.794,41.968L63.794,41.968z M34.355,46.957c-0.006,0-0.012,0-0.018,0	c-0.194-0.007-0.367-0.125-0.443-0.305c-1.013-2.396-1.893-4.795-2.614-7.131c-0.042-0.133-0.025-0.278,0.045-0.398	c0.07-0.121,0.188-0.207,0.324-0.237c2.35-0.525,4.841-0.946,7.404-1.252c0.195-0.02,0.38,0.067,0.483,0.23	c0.103,0.164,0.102,0.372-0.001,0.535c-0.93,1.464-1.735,2.794-2.461,4.066c-0.771,1.351-1.515,2.731-2.272,4.22	C34.715,46.852,34.543,46.957,34.355,46.957z M32.399,39.745c0.577,1.816,1.25,3.669,2.005,5.525	c0.597-1.144,1.19-2.232,1.801-3.302c0.583-1.021,1.215-2.078,1.921-3.21C36.156,39.02,34.236,39.351,32.399,39.745z M69.063,36.974	c-0.037,0-0.073-0.004-0.11-0.012c-3.188-0.718-6.637-1.247-10.25-1.573c-0.147-0.013-0.282-0.091-0.366-0.213	c-2.133-3.076-4.363-5.894-6.627-8.377c-0.18-0.197-0.173-0.501,0.016-0.69c4.201-4.21,8.183-6.908,11.514-7.8h0	c1.869-0.5,3.438-0.387,4.654,0.322c3.355,1.96,3.989,8.845,1.653,17.968C69.489,36.823,69.287,36.974,69.063,36.974z M59.025,34.414c3.393,0.315,6.643,0.808,9.671,1.467c2.051-8.313,1.549-14.719-1.307-16.387c-0.979-0.571-2.291-0.646-3.891-0.22	c-3.074,0.824-6.777,3.312-10.728,7.206C54.907,28.855,57.009,31.521,59.025,34.414z M30.937,36.974	c-0.224,0-0.426-0.151-0.484-0.376c-2.336-9.123-1.703-16.007,1.652-17.967c0,0,0,0,0.001,0c1.216-0.709,2.787-0.822,4.653-0.322	c3.332,0.893,7.313,3.59,11.514,7.8c0.188,0.189,0.195,0.493,0.016,0.69c-2.264,2.483-4.494,5.302-6.627,8.377	c-0.084,0.122-0.218,0.2-0.366,0.213c-3.612,0.326-7.061,0.855-10.25,1.573C31.01,36.97,30.974,36.974,30.937,36.974z M32.61,19.494	c-2.855,1.668-3.357,8.074-1.307,16.387c3.028-0.659,6.278-1.152,9.671-1.467c2.017-2.893,4.118-5.559,6.254-7.935	c-3.951-3.894-7.653-6.382-10.728-7.206C34.907,18.848,33.593,18.922,32.61,19.494L32.61,19.494z M54.864,35.122	c-0.008,0-0.016,0-0.024,0c-3.306-0.161-6.373-0.161-9.679,0c-0.206,0.005-0.374-0.094-0.465-0.263	c-0.091-0.17-0.077-0.377,0.038-0.533c1.587-2.155,3.234-4.18,4.896-6.018c0.19-0.209,0.552-0.209,0.742,0	c1.661,1.837,3.308,3.862,4.896,6.018c0.114,0.155,0.129,0.363,0.038,0.533C55.217,35.021,55.047,35.122,54.864,35.122z M50,34	c1.242,0,2.527,0.026,3.833,0.077c-1.252-1.657-2.538-3.228-3.833-4.684c-1.295,1.457-2.581,3.027-3.833,4.684	C47.473,34.026,48.758,34,50,34z"></path>
        </svg>
    ),

    nextjs: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
            <linearGradient id="wNc8qMg_PMLZF-NebSkXWa_AU6Wc7r56Fxz_gr1" x1="32" x2="32" y1="54" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e6abff"></stop><stop offset="1" stopColor="#6dc7ff"></stop></linearGradient><path fill="url(#wNc8qMg_PMLZF-NebSkXWa_AU6Wc7r56Fxz_gr1)" d="M54,32c0,5.75-2.2,10.98-5.8,14.9l-0.171,0.187L43,40.646V21h-7v10.686L27.663,21H21v22h7	V32.59l14.66,18.66C39.51,53,35.87,54,32,54c-12.15,0-22-9.85-22-22s9.85-22,22-22S54,19.85,54,32z"></path><linearGradient id="wNc8qMg_PMLZF-NebSkXWb_AU6Wc7r56Fxz_gr2" x1="32" x2="32" y1="58" y2="6" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#c822ff"></stop><stop offset="1" stopColor="#1a6dff"></stop></linearGradient><path fill="url(#wNc8qMg_PMLZF-NebSkXWb_AU6Wc7r56Fxz_gr2)" d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8	C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z M41,41.336V23h-3v14.496L26.683,23H23v18h3V26.81	L44.37,50.2c0.771-0.523,1.509-1.097,2.212-1.714L41,41.336z"></path>
        </svg>
    ),
    gsap: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
            <linearGradient id="0PdxPC-cNv0kFLsZV59Xha_yDKQRuOsnsds_gr1" x1="32.078" x2="32.078" y1="57.56" y2="7.38" gradientTransform="matrix(1 0 0 -1 0 63.89)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#0PdxPC-cNv0kFLsZV59Xha_yDKQRuOsnsds_gr1)" d="M44.589,34.003c-0.657-0.463-1.373-0.795-2.108-1.046c0.517-0.15,1.027-0.338,1.515-0.597	c4.637-2.456,5.821-9.307,5.821-9.307s-6.333-2.87-10.969-0.414c-0.346,0.183-0.666,0.397-0.974,0.624	c0.025-0.253,0.049-0.506,0.049-0.764c0-5.247-5.5-9.5-5.5-9.5s-5.5,4.253-5.5,9.5c0,0.654,0.086,1.293,0.235,1.91	c-0.532-0.603-1.137-1.152-1.845-1.589c-4.464-2.757-10.973-0.313-10.973-0.313s0.728,6.915,5.192,9.672	c0.194,0.12,0.396,0.218,0.597,0.318c-0.221,0.112-0.441,0.224-0.653,0.358c-4.43,2.811-5.075,9.734-5.075,9.734	s6.538,2.365,10.968-0.446c0.281-0.178,0.545-0.373,0.796-0.581c-0.154,0.626-0.243,1.273-0.243,1.937c0,5.247,5.5,9.5,5.5,9.5	s5.5-4.253,5.5-9.5c0-0.692-0.1-1.365-0.266-2.014c0.462,0.561,0.986,1.079,1.599,1.511c4.29,3.021,10.934,0.973,10.934,0.973	S48.878,37.024,44.589,34.003z"></path><linearGradient id="0PdxPC-cNv0kFLsZV59Xhb_yDKQRuOsnsds_gr2" x1="32.078" x2="32.078" y1="54.266" y2="7.513" gradientTransform="matrix(1 0 0 -1 0 63.89)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#0PdxPC-cNv0kFLsZV59Xhb_yDKQRuOsnsds_gr2)" d="M55.247,27.129	c-1.056-1.828-2.509-3.283-4.184-4.331c0.002-0.1,0.015-0.197,0.015-0.298c0-6.893-5.607-12.5-12.5-12.5	c-2.11,0-4.097,0.53-5.842,1.457c-0.085-0.052-0.165-0.112-0.252-0.162c-5.971-3.444-13.629-1.394-17.075,4.576	c-1.055,1.827-1.589,3.813-1.659,5.788c-0.088,0.048-0.179,0.086-0.266,0.136c-5.969,3.446-8.021,11.106-4.575,17.076	c1.054,1.825,2.513,3.262,4.185,4.309c-0.003,0.107-0.016,0.212-0.016,0.32c0,6.893,5.607,12.5,12.5,12.5	c2.11,0,4.097-0.53,5.842-1.457c0.085,0.052,0.165,0.112,0.252,0.162c1.964,1.133,4.109,1.672,6.229,1.672	c4.323,0,8.534-2.242,10.847-6.248c1.056-1.829,1.591-3.817,1.659-5.793c0.087-0.048,0.179-0.08,0.265-0.13	C56.641,40.759,58.693,33.098,55.247,27.129z M43.172,34.786c3.115,1.798,4.957,4.963,5.214,8.304	c-3.546,1.449-7.548,0.821-10.466-1.477c-0.442-2.899-1.878-5.469-3.955-7.355c-0.002-0.029-0.005-0.058-0.007-0.087	c0.028-0.011,0.056-0.025,0.084-0.036C35.45,34.686,36.977,35,38.578,35c1.336,0,2.621-0.216,3.829-0.605	C42.664,34.516,42.921,34.641,43.172,34.786z M36.078,43.5c0,3.597-1.82,6.775-4.585,8.668c-1.808-1.397-3.113-3.327-3.714-5.572	c-0.375-1.399-0.451-2.829-0.25-4.22c2.078-1.654,3.579-3.908,4.279-6.52c0.052-0.196,0.085-0.393,0.128-0.589	c0.024-0.017,0.048-0.033,0.073-0.05c0.019,0.015,0.039,0.029,0.058,0.043c0.232,1.519,0.738,2.998,1.529,4.368	c0.665,1.152,1.501,2.14,2.438,2.989C36.058,42.909,36.078,43.202,36.078,43.5z M24.984,41.714	c-3.114,1.798-6.776,1.812-9.798,0.363c0.517-3.793,3.06-6.944,6.506-8.323c1.47,0.575,3.002,0.864,4.522,0.864	c1.298,0,2.579-0.226,3.809-0.617c0.035,0.017,0.071,0.034,0.106,0.051c-0.004,0.025-0.005,0.051-0.009,0.076	c-1.185,0.945-2.222,2.112-3.024,3.501c-0.661,1.145-1.121,2.366-1.393,3.622C25.469,41.412,25.233,41.57,24.984,41.714z M20.984,31.214c-3.115-1.798-4.957-4.963-5.214-8.304c3.545-1.449,7.548-0.821,10.466,1.477c0.442,2.899,1.878,5.469,3.955,7.355	c0.002,0.029,0.005,0.057,0.007,0.086c-0.029,0.012-0.057,0.025-0.086,0.037C28.705,31.313,27.179,31,25.578,31	c-1.336,0-2.621,0.216-3.829,0.605C21.492,31.483,21.235,31.358,20.984,31.214z M28.078,22.5c0-3.597,1.82-6.776,4.585-8.668	c1.808,1.397,3.113,3.327,3.714,5.572c0.375,1.399,0.451,2.829,0.25,4.22c-2.078,1.654-3.579,3.908-4.279,6.52	c-0.052,0.195-0.084,0.392-0.127,0.588c-0.024,0.017-0.049,0.033-0.074,0.05c-0.019-0.015-0.038-0.028-0.057-0.043	c-0.232-1.519-0.738-2.998-1.529-4.368c-0.668-1.157-1.497-2.162-2.439-3.013C28.099,23.074,28.078,22.789,28.078,22.5z M42.46,32.247c-2.729-1.066-5.669-1.108-8.34-0.255c-0.031-0.015-0.062-0.03-0.093-0.045c0.004-0.028,0.006-0.057,0.01-0.086	c1.182-0.944,2.222-2.104,3.023-3.491c0.661-1.145,1.121-2.366,1.393-3.622c0.234-0.161,0.47-0.319,0.719-0.463	c1.649-0.952,3.452-1.405,5.232-1.405c1.583,0,3.14,0.378,4.563,1.061C48.444,27.728,45.902,30.872,42.46,32.247z M38.578,12	c5.547,0,10.091,4.326,10.464,9.78c-3.251-1.291-7.003-1.209-10.313,0.488c0.011-1.128-0.121-2.264-0.42-3.383	c-0.639-2.386-1.941-4.479-3.744-6.085C35.802,12.287,37.157,12,38.578,12z M17.142,16.871c1.942-3.365,5.479-5.248,9.111-5.248	c1.55,0,3.112,0.366,4.58,1.084c-2.739,2.171-4.54,5.46-4.724,9.173c-3.056-1.806-6.809-2.275-10.281-1.133	C16.002,19.418,16.431,18.102,17.142,16.871z M10.642,37.871c-2.773-4.804-1.299-10.903,3.238-13.953	c0.508,3.462,2.456,6.672,5.584,8.691c-3.093,1.743-5.375,4.759-6.121,8.337C12.278,40.131,11.353,39.102,10.642,37.871z M25.578,54	c-5.545,0-10.088-4.323-10.463-9.775c1.473,0.584,3.048,0.894,4.641,0.894c1.923,0,3.861-0.469,5.671-1.398	c-0.013,1.131,0.12,2.271,0.42,3.394c0.639,2.386,1.941,4.479,3.744,6.085C28.355,53.713,27,54,25.578,54z M47.015,49.129	c-2.772,4.803-8.793,6.578-13.702,4.172c2.746-2.172,4.553-5.467,4.734-9.188c1.936,1.145,4.147,1.764,6.396,1.764	c1.304,0,2.614-0.231,3.89-0.652C48.162,46.563,47.731,47.889,47.015,49.129z M50.277,42.081c-0.508-3.462-2.456-6.672-5.584-8.691	c3.092-1.743,5.374-4.758,6.12-8.334c1.064,0.815,1.991,1.842,2.701,3.072C56.288,32.933,54.814,39.032,50.277,42.081z"></path>
        </svg>
    ),
    tailwind: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
            <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
        </svg>
    ),
    bootstrap: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
            <linearGradient id="GdeByWRAcrxkNrB1xXKVla_ZMc42tPbG32H_gr1" x1="32" x2="32" y1="57" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#c822ff"></stop><stop offset="1" stopColor="#1a6dff"></stop></linearGradient><path fill="none" stroke="url(#GdeByWRAcrxkNrB1xXKVla)" strokeMiterlimit="10" strokeWidth="2" d="M62,30.45v3.1	c-2.77,0.31-4.93,2.4-5.95,5.67c-1.02,3.31-1.16,7.37-1.05,10.51c0.11,3.26-2.43,6.27-5.87,6.27H14.87c-3.44,0-5.98-3.01-5.87-6.27	c0.11-3.14-0.03-7.2-1.05-10.51C6.93,35.95,4.77,33.86,2,33.55v-3.1c2.77-0.31,4.93-2.4,5.95-5.67C8.97,21.47,9.11,17.41,9,14.27	C8.89,11.01,11.43,8,14.87,8h34.26c3.44,0,5.98,3.01,5.87,6.27c-0.11,3.14,0.03,7.2,1.05,10.51C57.07,28.05,59.23,30.14,62,30.45z"></path><linearGradient id="GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2" x1="32" x2="32" y1="53" y2="11" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e6abff"></stop><stop offset="1" stopColor="#6dc7ff"></stop></linearGradient><path fill="url(#GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2)" d="M14.87,53c-0.95,0-1.599-0.465-1.976-0.854c-0.599-0.619-0.925-1.462-0.896-2.314	c0.11-3.134-0.005-7.677-1.181-11.495C9.942,35.533,8.351,33.342,6.303,32c2.048-1.341,3.639-3.529,4.511-6.326	c1.18-3.829,1.295-8.372,1.185-11.51c-0.028-0.848,0.298-1.691,0.896-2.31C13.271,11.465,13.92,11,14.87,11h34.26	c0.95,0,1.599,0.465,1.976,0.854c0.599,0.619,0.925,1.462,0.896,2.314c-0.11,3.134,0.005,7.677,1.181,11.495	c0.875,2.804,2.467,4.995,4.515,6.337c-2.048,1.341-3.639,3.529-4.511,6.326c-1.18,3.829-1.295,8.372-1.185,11.51	c0.028,0.848-0.298,1.691-0.896,2.31C50.729,52.535,50.08,53,49.13,53H14.87z M36.713,31.135c2.657-0.428,4.744-2.891,4.744-5.65	c0-3.93-3.105-6.485-7.829-6.485H23l0,25.99h10.689c5.66,0,9.07-2.769,9.07-7.35c0-3.461-2.433-5.955-6.047-6.352V31.135z M32.631,22.298c2.993,0,4.693,1.334,4.693,3.746c0,2.576-1.975,4.011-5.558,4.011H27v-7.757H32.631z M27,41.692V33.14h5.6	c3.909,0,5.935,1.435,5.935,4.245c0,2.81-1.975,4.306-5.701,4.306H27z"></path>
        </svg>
    ),
    django: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
            <linearGradient id="o6Fl--qWZ-2FO5KaINR1fa_qc3TyHJPxEoH_gr1" x1="30" x2="30" y1="62" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#c822ff"></stop><stop offset="1" stopColor="#1a6dff"></stop></linearGradient><path fill="url(#o6Fl--qWZ-2FO5KaINR1fa_qc3TyHJPxEoH_gr1)" d="M42.671,62c-0.155,0-0.311-0.036-0.452-0.108l-8.27-4.188	c-0.345-0.175-0.559-0.534-0.548-0.921c0.012-0.387,0.245-0.733,0.601-0.888c5.288-2.307,8.201-6.081,8.201-10.627V19.404	c0-0.265,0.105-0.52,0.293-0.708c0.188-0.187,0.442-0.292,0.707-0.292c0,0,0,0,0.001,0l8.802,0.004c0.552,0,0.999,0.448,0.999,1	v25.86c0,3.104-0.722,13.483-10.009,16.677C42.891,61.982,42.78,62,42.671,62z M36.642,56.826l6.096,3.086	c7.663-2.925,8.268-11.92,8.268-14.644V20.408l-6.802-0.003v24.864C44.203,50.086,41.536,54.133,36.642,56.826z M24.829,49.004	c-11.5,0-17.834-5.823-17.834-16.397c0-10.17,6.15-16.241,16.452-16.241c0.701,0,2.126,0.028,3.353,0.225V4c0-0.552,0.447-1,1-1	h8.802c0.553,0,1,0.448,1,1v42.875c0,0.445-0.294,0.837-0.722,0.96C33.57,48.794,27.059,49.004,24.829,49.004z M23.447,18.366	c-4.346,0-14.452,1.388-14.452,14.241c0,11.899,8.61,14.397,15.834,14.397c2.748,0,7.839-0.25,10.772-0.906V5H28.8v12.868	c0,0.333-0.166,0.644-0.442,0.83c-0.275,0.187-0.627,0.222-0.935,0.097C26.696,18.498,24.902,18.366,23.447,18.366z M25.738,40.674	c-5.121,0-7.941-2.865-7.941-8.067c0-5.065,2.672-7.634,7.941-7.634c0.646,0,1.382,0.08,2.249,0.245	c0.472,0.09,0.812,0.502,0.812,0.982v13.245c0,0.48-0.342,0.893-0.813,0.982C27.113,40.593,26.378,40.674,25.738,40.674z M25.738,26.973c-4.164,0-5.941,1.685-5.941,5.634c0,4.083,1.943,6.067,5.941,6.067c0.313,0,0.665-0.026,1.062-0.078V27.05	C26.406,26.999,26.055,26.973,25.738,26.973z M52.005,13.802h-8.802c-0.553,0-1-0.448-1-1V4c0-0.552,0.447-1,1-1h8.802	c0.553,0,1,0.448,1,1v8.802C53.005,13.354,52.558,13.802,52.005,13.802z M44.203,11.802h6.802V5h-6.802V11.802z"></path><linearGradient id="o6Fl--qWZ-2FO5KaINR1fb_qc3TyHJPxEoH_gr2" x1="30" x2="30" y1="57.71" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e6abff"></stop><stop offset="1" stopColor="#6dc7ff"></stop></linearGradient><path fill="url(#o6Fl--qWZ-2FO5KaINR1fb_qc3TyHJPxEoH_gr2)" d="M46.2,7v2.8H49V7H46.2z M30.8,7v10.87l0.01,3.63c0,0-2.81-1.13-7.36-1.13	C18.8,20.37,11,21.96,11,32.61C11,35.67,11,45,24.83,45c2.35,0,6.07-0.18,8.77-0.57V7H30.8z M30.8,41.93	c-2.364,0.446-3.631,0.74-5.06,0.74c-6.23,0-9.94-3.76-9.94-10.06c0-6.22,3.53-9.64,9.94-9.64c0.77,0,1.63,0.09,2.62,0.28l2.44,0.47	V41.93z M46.2,22.41v22.86c0,4.42-1.99,8.35-5.62,11.31l2.22,1.13c5.74-2.8,6.2-10.15,6.2-12.44V22.41H46.2z"></path>
        </svg>
    ),
    nodejs: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
            <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
        </svg>
    ),
    mysql: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
            <linearGradient id="eDMgMixeD6M6EYSYBuJ8ya_9nLaR5KFGjN0_gr1" x1="9.8" x2="11.081" y1="25.236" y2="36.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#058f92"></stop><stop offset=".5" stop-color="#038489"></stop><stop offset="1" stop-color="#026d71"></stop></linearGradient><path fill="url(#eDMgMixeD6M6EYSYBuJ8ya_9nLaR5KFGjN0_gr1)" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z M13.441,29.281h1.92 v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92c0.008,0,0,5.968,0,5.993 c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19 c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281z"></path><linearGradient id="eDMgMixeD6M6EYSYBuJ8yb_9nLaR5KFGjN0_gr2" x1="34.224" x2="35.101" y1="25.644" y2="35.217" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff9c0f"></stop><stop offset=".813" stop-color="#d67e00"></stop></linearGradient><path fill="url(#eDMgMixeD6M6EYSYBuJ8yb_9nLaR5KFGjN0_gr2)" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536 v-1.368c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96 h-4.435c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><linearGradient id="eDMgMixeD6M6EYSYBuJ8yc_9nLaR5KFGjN0_gr3" x1="35.029" x2="40.355" y1="11.716" y2="26.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#058f92"></stop><stop offset=".5" stop-color="#038489"></stop><stop offset="1" stop-color="#026d71"></stop></linearGradient><path fill="url(#eDMgMixeD6M6EYSYBuJ8yc_9nLaR5KFGjN0_gr3)" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path>
        </svg>
    ),
    mango: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
            <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
        </svg>
    ),
};
