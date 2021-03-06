import axios from "axios";

import wrapper from "@store/configureStore";
import { PayloadHeaders, RequestHeader } from "@type/apis";
import { getCamps } from "@reducers/camps/action";
import { getSigninUser } from "@reducers/user/action";

const CampsiteListPage: NextPage = () => {
  const { mainCamps } = useAppSelector((state) => state.camps);
  const [sorted, setSorted] = useState("latest");
  const onChange = useCallback((e) => {
    setSorted(e.target.value);
  }, []);

  return (
    <>
      <RowFrame>
        <FilterFinder sorted={sorted} />
        <SortButton onChange={onChange} />
        {mainCamps.map((camp) => (
          <CampSiteListBox camp={camp} key={camp._id} />
        ))}
      </RowFrame>
    </>
  );
};

export { default } from "@pages/Camps";

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());
  const setCookies = (signUserRes.payload as PayloadHeaders)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getCamps({}));

  return {
    props: {},
  };
});
