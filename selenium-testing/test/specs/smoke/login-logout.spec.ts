import config from '../../config.js';
import { login } from '../../functions/login.js';
import { logout } from '../../functions/logout.js';
import { buildUrl } from '../../functions/build-url.js';

/**
 * Verify that a user is able to log in to the platform and logout of the platform. It also
 * ensures that a user with invalid credentials is not able to log in.
 */
describe('Login and Logout::', () => {
    // First attempt to log in with valid credentials
    it('1 Login with valid credentials', async () => {
        await login();
        expect(browser).toHaveUrl(
            buildUrl('private/dashboard/group/1'),
            {message: "m9sweeper should be displaying the default dashboard"}
        );

        // Take a screenshot at the end so that we can see the results
        // @ts-ignore
        await browser.customScreenshot("test-end");
    });


    // Next we should log out of the UI
    it('2 Logout', async () => {
        await logout();
        expect(browser).toHaveUrl(
            buildUrl('public/login'),
            {message: "m9sweeper should be showing the login page"}
        );

        // Take a screenshot at the end so that we can see the results
        // @ts-ignore
        await browser.customScreenshot("test-end");
    });


    // Now we make sure that we cannot log in with invalid credentials
    it('3 No login with invalid credentials', async () => {
        await login(config.USERNAME, 'WRONGPASSWORD', true);
        expect(browser).toHaveUrl(
            buildUrl('public/login'),
            {message: "m9sweeper should be showing the login page"}
        );

        // Take a screenshot at the end so that we can see the results
        // @ts-ignore
        await browser.customScreenshot("test-end");
    });
});